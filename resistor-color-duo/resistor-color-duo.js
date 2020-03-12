
export const decodedValue = (colors) => {
  const resistorColors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

  let result = [];
  
  for(let i = 0; i < 2; i++){
    result.push(resistorColors.indexOf(colors[i]));
  }

  return Number(result.join(''));

};
