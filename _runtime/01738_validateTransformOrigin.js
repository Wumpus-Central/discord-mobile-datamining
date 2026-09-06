// === Module 1738: validateTransformOrigin ===

// Module 1738 (validateTransformOrigin)
import t from "t" /* 1647 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
function validateTransformOrigin(arg0) {
  if (3 !== arg0.length) {
    const reanimatedError = new t.ReanimatedError("Transform origin must have exactly 3 values.");
    throw reanimatedError;
  } else {
    [obj, obj2, tmp30] = callback(arg0, 3);
    if (typeof obj !== "number") {
      const _HermesInternal = HermesInternal;
      const reanimatedError1 = new t.ReanimatedError("Transform origin x-position must be a number or a percentage string. Passed value: " + obj + ".");
      throw reanimatedError1;
    }
    if (typeof obj2 !== "number") {
      const _HermesInternal2 = HermesInternal;
      const reanimatedError2 = new t.ReanimatedError("Transform origin y-position must be a number or a percentage string. Passed value: " + obj2 + ".");
      throw reanimatedError2;
    }
    if (typeof tmp30 !== "number") {
      const _HermesInternal3 = HermesInternal;
      const reanimatedError3 = new t.ReanimatedError("Transform origin z-position must be a number. Passed value: " + tmp30 + ".");
      throw reanimatedError3;
    }
    const tmp29 = callback(arg0, 3);
  }
}
validateTransformOrigin.__closure = {};
validateTransformOrigin.__workletHash = 6034608374885;
validateTransformOrigin.__initData = { code: "function validateTransformOrigin_Pnpm_processTransformOriginTs1(transformOrigin){if(transformOrigin.length!==3){throw new ReanimatedError('Transform origin must have exactly 3 values.');}const[x,y,z]=transformOrigin;if(!(typeof x==='number'||typeof x==='string'&&x.endsWith('%'))){throw new ReanimatedError(\"Transform origin x-position must be a number or a percentage string. Passed value: \"+x+\".\");}if(!(typeof y==='number'||typeof y==='string'&&y.endsWith('%'))){throw new ReanimatedError(\"Transform origin y-position must be a number or a percentage string. Passed value: \"+y+\".\");}if(typeof z!=='number'){throw new ReanimatedError(\"Transform origin z-position must be a number. Passed value: \"+z+\".\");}}" };
function processTransformOrigin(str) {
  let items = str;
  if (!Array.isArray(str)) {
    items = ["50%", "50%", 0];
  }
  if (typeof str === "string") {
    const obj = /(top|bottom|left|right|center|\d+(?:%|px)|0)/gi;
    const items1 = ["50%", "50%", 0];
    let match = obj.exec(str);
    let num4 = 0;
    items = items1;
    if (match) {
      while (true) {
        str = match[0];
        let formatted = str.toLowerCase();
        let tmp2 = num4;
        let sum = num4 + 1;
        if ("left" !== formatted) {
          if ("right" !== formatted) {
            if ("top" !== formatted) {
              if ("bottom" !== formatted) {
                if ("center" === formatted) {
                  if (2 === num4) {
                    let tmp11 = require;
                    let tmp12 = dependencyMap;
                    let _HermesInternal2 = HermesInternal;
                    let str3 = " cannot be used for z-position";
                    let str4 = "Transform-origin value ";
                    let tmp13 = new.target;
                    let tmp14 = new.target;
                    let reanimatedError = new t.ReanimatedError("Transform-origin value " + str + " cannot be used for z-position");
                    let tmp16 = reanimatedError;
                    throw reanimatedError;
                  } else {
                    items1[num4] = "50%";
                    let num = sum;
                  }
                } else if (str.endsWith("%")) {
                  items1[num4] = str;
                  num = sum;
                } else {
                  let _parseFloat = parseFloat;
                  let parsed = parseFloat(str);
                  let _isNaN = isNaN;
                  if (isNaN(parsed)) {
                    break;
                  } else {
                    items1[num4] = parsed;
                    num = sum;
                  }
                }
              }
            }
            if (2 === num4) {
              let tmp24 = require;
              let tmp25 = dependencyMap;
              let _HermesInternal4 = HermesInternal;
              let str7 = " can only be used for y-position";
              let str8 = "Transform-origin ";
              let tmp26 = new.target;
              let tmp27 = new.target;
              let reanimatedError1 = new t.ReanimatedError("Transform-origin " + str + " can only be used for y-position");
              let tmp29 = reanimatedError1;
              throw reanimatedError1;
            } else {
              let num2 = "100%";
              if ("top" === formatted) {
                num2 = 0;
              }
              items1[1] = num2;
              num = sum;
              if (0 === num4) {
                let match1 = obj.exec(str);
                num = sum;
                if (null != match1) {
                  let formatted1;
                  if (match1 != null) {
                    let str5 = match1[0];
                    formatted1 = str5.toLowerCase();
                  }
                  if ("left" === formatted1) {
                    items1[0] = 0;
                    num = 2;
                  } else if ("right" === formatted1) {
                    items1[0] = "100%";
                    num = 2;
                  } else if ("center" === formatted1) {
                    items1[0] = "50%";
                    num = 2;
                  } else {
                    let tmp18 = require;
                    let tmp19 = dependencyMap;
                    let _HermesInternal3 = HermesInternal;
                    let str6 = "Could not parse transform-origin: ";
                    let tmp20 = new.target;
                    let tmp21 = new.target;
                    let reanimatedError2 = new t.ReanimatedError("Could not parse transform-origin: " + str);
                    let tmp23 = reanimatedError2;
                    throw reanimatedError2;
                  }
                }
              }
            }
          }
          match = obj.exec(str);
          num4 = num;
          items = items1;
        }
        if (0 !== num4) {
          let tmp37 = require;
          let tmp38 = dependencyMap;
          let _HermesInternal5 = HermesInternal;
          let str10 = " can only be used for x-position";
          let str11 = "Transform-origin ";
          let tmp39 = new.target;
          let tmp40 = new.target;
          let reanimatedError3 = new t.ReanimatedError("Transform-origin " + str + " can only be used for x-position");
          let tmp42 = reanimatedError3;
          throw reanimatedError3;
        } else {
          let num3 = "100%";
          if ("left" === formatted) {
            num3 = 0;
          }
          items1[0] = num3;
          num = sum;
        }
      }
      const _HermesInternal = HermesInternal;
      const reanimatedError4 = new t.ReanimatedError("Invalid numeric value in transform-origin: " + str);
      throw reanimatedError4;
    }
  }
  if (typeof str !== "string") {
    const _Array = Array;
    if (!Array.isArray(str)) {
      const reanimatedError5 = new t.ReanimatedError("Invalid transformOrigin type: " + typeof str);
      throw reanimatedError5;
    }
  }
  return items;
}
processTransformOrigin.__closure = { INDEX_X: 0, INDEX_Z: 2, INDEX_Y: 1, __DEV__: false, validateTransformOrigin };
processTransformOrigin.__workletHash = 11541675557002;
processTransformOrigin.__initData = { code: "function processTransformOrigin_Pnpm_processTransformOriginTs2(transformOriginIn){const{INDEX_X,INDEX_Z,INDEX_Y,__DEV__,validateTransformOrigin}=this.__closure;let transformOrigin=Array.isArray(transformOriginIn)?transformOriginIn:['50%','50%',0];if(typeof transformOriginIn==='string'){const transformOriginString=transformOriginIn;const regex=/(top|bottom|left|right|center|\\d+(?:%|px)|0)/gi;const transformOriginArray=['50%','50%',0];let index=INDEX_X;let matches;while(matches=regex.exec(transformOriginString)){let nextIndex=index+1;const value=matches[0];const valueLower=value.toLowerCase();switch(valueLower){case'left':case'right':{if(index!==INDEX_X){throw new ReanimatedError(\"Transform-origin \"+value+\" can only be used for x-position\");}transformOriginArray[INDEX_X]=valueLower==='left'?0:'100%';break;}case'top':case'bottom':{if(index===INDEX_Z){throw new ReanimatedError(\"Transform-origin \"+value+\" can only be used for y-position\");}transformOriginArray[INDEX_Y]=valueLower==='top'?0:'100%';if(index===INDEX_X){const horizontal=regex.exec(transformOriginString);if(horizontal==null){break;}switch(horizontal===null||horizontal===void 0?void 0:horizontal[0].toLowerCase()){case'left':transformOriginArray[INDEX_X]=0;break;case'right':transformOriginArray[INDEX_X]='100%';break;case'center':transformOriginArray[INDEX_X]='50%';break;default:throw new ReanimatedError(\"Could not parse transform-origin: \"+transformOriginString);}nextIndex=INDEX_Z;}break;}case'center':{if(index===INDEX_Z){throw new ReanimatedError(\"Transform-origin value \"+value+\" cannot be used for z-position\");}transformOriginArray[index]='50%';break;}default:{if(value.endsWith('%')){transformOriginArray[index]=value;}else{const numericValue=parseFloat(value);if(isNaN(numericValue)){throw new ReanimatedError(\"Invalid numeric value in transform-origin: \"+value);}transformOriginArray[index]=numericValue;}break;}}index=nextIndex;}transformOrigin=transformOriginArray;}if(typeof transformOriginIn!=='string'&&!Array.isArray(transformOriginIn)){throw new ReanimatedError(\"Invalid transformOrigin type: \"+typeof transformOriginIn);}if(__DEV__){validateTransformOrigin(transformOrigin);}return transformOrigin;}" };

export { processTransformOrigin };