> topic main {keep}
  + (hi|hello|greetings|hola|hay) [@ss-bot-2]
  - hello you
  - hi again
  - yes ((hello|hi|hola))
  - how ((doo|di do di))

  + [@]ss-bot-2 what * in *~2
  - ^whatIsInThisFood(<cap>)

  + [@]ss-bot-2 * calories in *~2
  - ^whatIsInThisFood(<cap>)

  + help
  - I can do a one thing at the moment\n
  ^ ask me about a food for example @TABLEBOT what's in 'some food'

  + {ordered} *
  - Sorry, didn't get that
  - no, didn't get that
  - no, didn't get that either
  - ((ah|ba|pa))!, this is rubbish I know - I didn't get that either
  - {keep} no sorry, try again
< topic
