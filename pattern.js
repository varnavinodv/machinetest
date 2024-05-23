n=8

for(let i=1;i<=n;i++){
    line=""
    for(let j=1;j<=i;j++)
        {
        if((j==1 || j==i)&&i!=n)
            {
         line=line+"* "
            }
       else if(i==n){
        line=line+"* "
       }
       
        else{
            line=line+"  "
        }
        }
    console.log(line);
}