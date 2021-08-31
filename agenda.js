function registraEventos() {
  var agenda = CalendarApp.getCalendarById("cybermupp@gmail.com");
  var celu = SpreadsheetApp.getActiveSheet().getActiveCell();
  var ini  = celu.offset(0, -3).getValue(); //DATA/HORA DE INÍCIO DO EVENTO
  var nome = celu.offset(0, -1).getValue(); //NOME DO RESPONSAVEL)
  var dataini = celu.offset(0, 1).getValue();//DATA E HORÁRIO INICIO,DESCRIÇÃO
  var datafim = celu.offset(0, 2).getValue();//DATA E HORÁRIO FIM, DESCRIÇÃO
  var titulo = celu.offset(0, -2).getValue(); //TITULO DA REUNIAO
  if(celu.getRow() >= 2 && celu.getColumn() == 4) { //SOMENTE LINHAS ACIMA DE 2 NA COLUNA 4
    if(celu.getValue() == true) {
      var eventoID = agenda.createAllDayEvent("Sua Reuniao: " + nome, ini,{description: "SOBRE O ASSUNTO: "+titulo+".\n"+"Com inicio ás "+dataini+"\n"+" E termino ás "+datafim});
      celu.offset(0,3).setValue(eventoID.getId());
    } else {
      agenda.getEventById(celu.offset(0,3).getValue()).deleteEvent(); //DELETA O EVENTO NA AGENDA
      celu.offset(0, 3).setValue("DESMARCADO"); //REGISTRA O EVENTO COMO DESMARCADO NA PLANILHA
    }
  }
}