// A database search;

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];
  
  function findOne(arr,id){
      for(i in arr){
      if((arr[i].id === id) || (arr[i].name === id) ||(arr[i].squad === id)){
          return arr[i];
      }else{
          return null;
      }
    }
  }

  console.log(findOne(HEROES,'Avengers'));
  console.log(findOne(HEROES,3));
  console.log(findOne(HEROES,9));