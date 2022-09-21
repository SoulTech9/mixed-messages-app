let quoteList = [ ['If you don\'t like something, change it. If you can\'t change it, change your attitude. ', ' -Maya Angelou'],  ['One of the lessons that I grew up with was to always true to yourself and never let what somebody else says distract you from your goals.', ' -Michelle Obama'], ['Be thankful for what you have; you\'ll end up having more. If you concentrate on what you don\'t have, you will never ever have enough.' , ' -Oprah Winfrey'], ['Keep your face always toward the sunshine-and shadows will fall behind you.', ' -Walt Whitman'], ['If you don\'t like the road you\'re walking, start paving another one.' , ' -Dolly Parton'] ['I learned a long time ago that there is something worse than missing the goal, and that\'s not pulling the trigger.', ' -Mia Hamm'] , ['Success is stumbling from failure to failure with no loss of enthusiam.', ' -Winston Churchill'] , ['I never lose. Either I win or learn.',' -Nelson Mendela']];

const motivate = (y) => {
    let x = quoteList;
    y=(Math.floor(Math.random()*x.length));
     return console.log(x[y]);
   }   

(motivate()); 