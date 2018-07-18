/*5. Properties that aren't there
Expand on the previous example by adding a boss property to everyone except the owner of the company.
Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior 
Engineer Bob reports to Fred..
What gets printed out for the owner?
Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example,
 Founder John doesn't report 
to anybody.  */


let people = [
    {name : 'Rand',
      jobTitle : 'musician',
        boss : 'brook'
    },
    {name : 'Brook',
      jobTitle : 'server',
    boss : ' Jacob'},
    {name : 'Jacob',
      jobTitle : 'quartermaster',
    boss : 'Gary'},
    {name : 'Gary',
      jobTitle : 'retired',
     boss : 'Logan'},
     {
    name :  'Logan',
    jobTitle : 'superNatural'
    }
];
  



  for (let i = 0; i < people.length; i++) {
    //console.log(people[i].name, people[i].jobTitle);

    if (!people[i].boss){
        console.log(people[i].jobTitle +" " + people[i].name + " does not report to anybody");
    } else
     {
    console.log(people[i].jobTitle +  " reports to " + people[i].boss);}
  }