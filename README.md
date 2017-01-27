# busesnobuses
microservice for google home / alexa to give realtime Milwaukee county transit system (MCTS) data.

express api using cheerio to parse info from their jsp page. feels super dirty scoping to a \<B\> tag but it works...

future plan is to make this generic enough to accept a bus and a direction, where now it is very much specific to my use case (if i am inquiring from home, my location is static).
