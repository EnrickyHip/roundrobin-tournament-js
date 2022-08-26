# Round Robin Tournament
Easily schuedule tournaments using Round Robin algorithm. A Round Robin algorithm creates an "all-play-all" tournament, where every team plays against each other. (usually in two rounds, where each one is the home team once). Round Robin Tournament makes it automatically for you.

## Installation

```shell
$ npm install roundrobin-tournament-js
```

## Usage

To create a Round Robin Tournament you just need to create an array with any elements and pass it as a parameter to the roundrobin function.

```js
const roundrobin = require('roundrobin-tournament-js');

const teams = ["Liverpool", "Manchester United", "Arsenal", "Chelsea"];
const tournament = roundrobin(teams);

console.log(tournament);

/*
  output:

  [
    [ [ 'Liverpool', 'Chelsea' ], [ 'Manchester United', 'Arsenal' ] ],
    [ [ 'Chelsea', 'Manchester United' ], [ 'Arsenal', 'Liverpool' ] ],
    [ [ 'Arsenal', 'Chelsea' ], [ 'Liverpool', 'Manchester United' ] ]
  ]

*/
```
<br>

 auto-generate second rounds by setting to true the second parameter:

<br>

```js

const teams = ["Liverpool", "Manchester United", "Arsenal", "Chelsea"];
const tournament = roundrobin(teams, true);

console.log(tournament);

/*
  output:

  [
    [ [ 'Liverpool', 'Chelsea' ], [ 'Manchester United', 'Arsenal' ] ],
    [ [ 'Liverpool', 'Manchester United' ], [ 'Arsenal', 'Chelsea' ] ],
    [ [ 'Arsenal', 'Liverpool' ], [ 'Chelsea', 'Manchester United' ] ],
    [ [ 'Chelsea', 'Liverpool' ], [ 'Arsenal', 'Manchester United' ] ],
    [ [ 'Manchester United', 'Liverpool' ], [ 'Chelsea', 'Arsenal' ] ],
    [ [ 'Liverpool', 'Arsenal' ], [ 'Manchester United', 'Chelsea' ] ]
  ]

*/
```

## License

MIT License. Copyright (c) 2022

<br>
