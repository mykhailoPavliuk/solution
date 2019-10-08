let s="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or words etc.";
let k=12;

function checkLength(elem){
    let result=elem.join("");
    result=result.split(" ");
    return result.length+elem.length;
}

function solution(S, K){
    S=S.split(" ");
    let elements=[];
    let message=[];
    let str;

    for(let i=0;i<S.length;i++){
        if(S[i].length>K){
            return -1;
        }
        if (checkLength(elements)+S[i].length<=K){
            elements.push(S[i]);
            str=elements.join(" ");
            if(S[i+1]){
                if(str.length+S[i+1].length>=K){
                    message.push(str);
                    elements=[];
                }
            }
            else {
                message.push(str);
            }
        }
        else{
            message.push(S[i])
        }
    }
return message
}


// let arr=solution(s, k);
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i].length);
// }

console.log(solution(s, k));
