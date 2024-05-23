n=5

for(let i=0;i<=n;i++){
    line=""
    for(let j=0;j<=i;j++)
        {
        if((j==0))
            {
         line=line+"* "
            }
       
       
        else{
            line=line+j+" "

            
        }
        }
        for(let j=i-1;j>=0;j--)
            {
            if(j==0 )
                {
             line=line+"* "
                }
           
           
            else{
                line=line+j+" "
            }
            }
        
        
    console.log(line);
}










for(let i=n-1;i>=0;i--){
    line=""
    for(let j=0;j<i;j++)
        {
        if(j==0)
            {
         line=line+"* "
            }
       
       
        else{
            line=line+j+" "

            
        }
        }
    for(let j=i;j>=0;j--)
        {
        if(j==0 )
            {
         line=line+"* "
            }
       
       
        else{
            line=line+j+" "
        }
        }
    
    
        
    console.log(line);
}