let s="SMS messages are really short";
let k=12;


function checkLength(elem){
    let result=elem.join("");
    result=result.split("");
    return result.length+elem.length-1;
}

function solution(S, K){
    S=S.split(" ");
    let elements=[];
    let message=[];
    let str;

    for(let i=0;i<S.length;i++){
        if (checkLength(elements)+S[i].length<K){
            elements.push(S[i]);
            str=elements.join(" ");
            if(S[i+1]){
                if(str.length+S[i+1].length>K){
                    message.push(str);
                    elements=[];
                }
            }
            else {
                message.push(str);
            }
        }
    }
return message.length
}

console.log(solution(s, k));



