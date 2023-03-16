//1

// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Aneeq
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim*/

/*Hello speaker function*/
var names=new Array();
names[0]="yaako";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jin";
for(var i=0; i<names.length; i++)
{ 
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
	{
		console.log("Goodbye"+ names[i])

	}
	else{
		console.log("hello"+names[i])
	}

}

 