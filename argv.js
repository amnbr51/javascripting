
var s=0;

for(var i=2;i<5;i++)
{
process.argv[i]=Number(process.argv[i]);
s=s+process.argv[i];
}
console.log(s);
