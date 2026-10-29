// === Module 12685: hexSequence ===

// Module 12685 (hexSequence)
import _mod12657 from "module_12657" /* 12657 */;

function hexSequence(value, sum, arg2) {
  let num = 0;
  let sum1 = sum;
  let num2 = 0;
  if (sum < value.value.length) {
    while (true) {
      value = value.value;
      let charCodeAtResult = value.charCodeAt(sum1);
      if (45 === charCodeAtResult) {
        if (arg2) {
          if (0 !== num) {
            break;
          }
        }
      }
      let obj = _mod12657;
      if (obj.isHexDigit(charCodeAtResult)) {
        sum = num + 1;
        if (6 < sum) {
          return 0;
        } else {
          sum1 = sum1 + 1;
          num = sum;
          num2 = sum;
        }
      } else {
        return 0;
      }
    }
    let num3 = 0;
    if (0 < hexSequence(value, sum + num + 1, false)) {
      num3 = 6;
    }
    return num3;
  }
  return num2;
}
const Ident = _mod12657.TYPE.Ident;
const Delim = _mod12657.TYPE.Delim;
const Number = _mod12657.TYPE.Number;
const Dimension = _mod12657.TYPE.Dimension;

export default function urange(type, fn) {
  if (null !== type) {
    if (type.type === Ident) {
      if (obj8.cmpChar(type.value, 0, 117)) {
        const iter = fn(1);
        if (null === iter) {
          return 0;
        } else {
          let tmp3 = null !== iter;
          if (tmp3) {
            tmp3 = iter.type === Delim;
          }
          if (tmp3) {
            value = iter.value;
            tmp3 = value.charCodeAt(0) === 43;
          }
          if (tmp3) {
            let iter6 = fn(2);
            if (null === iter6) {
              return 0;
            } else if (iter6.type === tmp80) {
              let num50 = 0;
              let num51 = 0;
              let num52 = 0;
              if (0 >= iter6.value.length) {
                let num53 = num52;
              } else {
                while (true) {
                  value2 = iter6.value;
                  let charCodeAtResult = value2.charCodeAt(num51);
                  if (45 === charCodeAtResult) {
                    if (0 !== num50) {
                      break;
                    }
                  }
                  let obj6 = _mod12657;
                  num53 = 0;
                  if (obj6.isHexDigit(charCodeAtResult)) {
                    let sum = num50 + 1;
                    num53 = 0;
                    if (6 >= sum) {
                      num51 = num51 + 1;
                      num50 = sum;
                      num52 = sum;
                    }
                    continue;
                  }
                }
                let sum1 = num50 + 1;
                let num54 = 0;
                let num55 = 0;
                if (sum1 >= iter6.value.length) {
                  let num56 = num55;
                } else {
                  value3 = iter6.value;
                  const charCodeAtResult1 = value3.charCodeAt(sum1);
                  num56 = 0;
                  while (obj7.isHexDigit(charCodeAtResult1)) {
                    let sum2 = num54 + 1;
                    num56 = 0;
                    if (6 < sum2) {
                      break;
                    } else {
                      sum1 = sum1 + 1;
                      num54 = sum2;
                      num55 = sum2;
                    }
                  }
                  obj7 = _mod12657;
                }
                let num57 = 0;
                if (0 < num56) {
                  num57 = 6;
                }
                num53 = num57;
              }
              if (num53) {
                const iter9 = fn(3);
                let tmp74 = null !== iter9;
                if (tmp74) {
                  iter6 = Delim;
                  tmp74 = iter9.type === Delim;
                }
                if (tmp74) {
                  iter6 = iter9.value;
                  tmp74 = iter6.charCodeAt(0) === 63;
                }
                let num62 = 3;
                let num63 = 3;
                if (!tmp74) {
                } else {
                  const sum3 = num53 + 1;
                  while (6 >= sum3) {
                    let sum4 = num62 + 1;
                    let iter10 = fn(sum4);
                    let tmp78 = null !== iter10;
                    if (tmp78) {
                      iter6 = Delim;
                      tmp78 = iter10.type === Delim;
                    }
                    if (tmp78) {
                      iter6 = iter10.value;
                      tmp78 = iter6.charCodeAt(0) === 63;
                    }
                    num62 = sum4;
                    num53 = sum3;
                    num63 = sum4;
                  }
                }
              }
            } else {
              let tmp53 = null !== iter6;
              if (tmp53) {
                tmp53 = iter6.type === Delim;
              }
              if (tmp53) {
                value4 = iter6.value;
                tmp53 = value4.charCodeAt(0) === 63;
              }
              if (tmp53) {
                const iter7 = fn(3);
                let tmp54 = null !== iter7;
                if (tmp54) {
                  tmp54 = iter7.type === Delim;
                }
                if (tmp54) {
                  const value5 = iter7.value;
                  tmp54 = value5.charCodeAt(0) === 63;
                }
                let num44 = 3;
                let num45 = 1;
                let num46 = 3;
                if (!tmp54) {
                } else {
                  const sum5 = num45 + 1;
                  while (6 >= sum5) {
                    let sum6 = num44 + 1;
                    let iter8 = fn(sum6);
                    let tmp59 = null !== iter8;
                    if (tmp59) {
                      tmp59 = iter8.type === Delim;
                    }
                    if (tmp59) {
                      let value6 = iter8.value;
                      tmp59 = value6.charCodeAt(0) === 63;
                    }
                    num44 = sum6;
                    num45 = sum5;
                    num46 = sum6;
                    break;
                  }
                }
              }
            }
          } else if (iter.type === Number) {
            const value7 = iter.value;
            if (value7.charCodeAt(0) === 43) {
              let num17 = 45;
              let num18 = 0;
              let num19 = 1;
              let num20 = 0;
              if (1 >= iter.value.length) {
                let num21 = num20;
              } else {
                while (true) {
                  let value8 = iter.value;
                  let charCodeAtResult2 = value8.charCodeAt(num19);
                  if (num17 === charCodeAtResult2) {
                    if (0 !== num18) {
                      break;
                    }
                  }
                  let obj3 = _mod12657;
                  num21 = 0;
                  if (obj3.isHexDigit(charCodeAtResult2)) {
                    let sum7 = num18 + 1;
                    num21 = 0;
                    if (6 >= sum7) {
                      num19 = num19 + 1;
                      num18 = sum7;
                      num20 = sum7;
                    }
                  }
                }
                let sum8 = 1 + num18 + 1;
                let num22 = 0;
                let num23 = 0;
                if (sum8 >= iter.value.length) {
                  let num24 = num23;
                } else {
                  const value9 = iter.value;
                  const charCodeAtResult3 = value9.charCodeAt(sum8);
                  num24 = 0;
                  while (obj4.isHexDigit(charCodeAtResult3)) {
                    let sum9 = num22 + 1;
                    num24 = 0;
                    if (6 < sum9) {
                      break;
                    } else {
                      sum8 = sum8 + 1;
                      num22 = sum9;
                      num23 = sum9;
                      break;
                    }
                  }
                  obj4 = _mod12657;
                }
                let num25 = 0;
                if (0 < num24) {
                  num25 = 6;
                }
                num21 = num25;
              }
              let num26 = 0;
              if (0 !== num21) {
                const iter11 = fn(2);
                if (null === iter11) {
                  num26 = 2;
                } else {
                  if (iter11.type !== Dimension) {
                    if (iter11.type !== tmp4) {
                      if (num21) {
                        const iter4 = fn(2);
                        let tmp38 = null !== iter4;
                        if (tmp38) {
                          tmp38 = iter4.type === Delim;
                        }
                        if (tmp38) {
                          const value10 = iter4.value;
                          tmp38 = value10.charCodeAt(0) === 63;
                        }
                        let num29 = 2;
                        if (!tmp38) {
                        } else {
                          const sum10 = num21 + 1;
                          while (6 >= sum10) {
                            let sum11 = num29 + 1;
                            let iter5 = fn(sum11);
                            let tmp43 = null !== iter5;
                            if (tmp43) {
                              tmp43 = iter5.type === Delim;
                            }
                            if (tmp43) {
                              let value11 = iter5.value;
                              tmp43 = value11.charCodeAt(0) === 63;
                            }
                            num29 = sum11;
                            num21 = sum10;
                            break;
                          }
                        }
                      }
                    }
                  }
                  const value12 = iter11.value;
                  if (value12.charCodeAt(0) === num17) {
                    let num34 = 0;
                    let num33 = 1;
                    let num35 = 0;
                    if (1 >= iter11.value.length) {
                      num17 = num35;
                    } else {
                      const value13 = iter11.value;
                      const charCodeAtResult4 = value13.charCodeAt(num33);
                      num17 = 0;
                      while (obj5.isHexDigit(charCodeAtResult4)) {
                        let sum12 = num34 + 1;
                        num17 = 0;
                        if (6 < sum12) {
                          break;
                        } else {
                          num33 = num33 + 1;
                          num34 = sum12;
                          num35 = sum12;
                        }
                      }
                      obj5 = _mod12657;
                    }
                  }
                }
              }
              return num26;
            } else {
              return 0;
            }
          } else {
            let num14 = 0;
            if (iter.type === Dimension) {
              const value14 = iter.value;
              num14 = 0;
              if (value14.charCodeAt(0) === 43) {
                let num69 = 0;
                let num70 = 1;
                let num71 = 0;
                if (1 >= iter.value.length) {
                  let num3 = num71;
                } else {
                  while (true) {
                    let value15 = iter.value;
                    let charCodeAtResult5 = value15.charCodeAt(num70);
                    if (45 === charCodeAtResult5) {
                      if (0 !== num69) {
                        break;
                      }
                    }
                    let obj = _mod12657;
                    num3 = 0;
                    if (obj.isHexDigit(charCodeAtResult5)) {
                      let sum13 = num69 + 1;
                      num3 = 0;
                      if (6 >= sum13) {
                        num70 = num70 + 1;
                        num69 = sum13;
                        num71 = sum13;
                      }
                    }
                  }
                  let sum14 = 1 + num69 + 1;
                  let num4 = 0;
                  let num5 = 0;
                  if (sum14 >= iter.value.length) {
                    let num6 = num5;
                  } else {
                    const value16 = iter.value;
                    const charCodeAtResult6 = value16.charCodeAt(sum14);
                    num6 = 0;
                    while (obj2.isHexDigit(charCodeAtResult6)) {
                      let sum15 = num4 + 1;
                      num6 = 0;
                      if (6 < sum15) {
                        break;
                      } else {
                        sum14 = sum14 + 1;
                        num4 = sum15;
                        num5 = sum15;
                        break;
                      }
                    }
                    obj2 = _mod12657;
                  }
                  let num7 = 0;
                  if (0 < num6) {
                    num7 = 6;
                  }
                  num3 = num7;
                }
                let num8 = 0;
                if (num3) {
                  const iter2 = fn(2);
                  let tmp18 = null !== iter2;
                  if (tmp18) {
                    tmp18 = iter2.type === Delim;
                  }
                  if (tmp18) {
                    const value17 = iter2.value;
                    tmp18 = value17.charCodeAt(0) === 63;
                  }
                  let num12 = 2;
                  let num13 = 2;
                  if (!tmp18) {
                    num8 = num13;
                  } else {
                    const sum16 = num3 + 1;
                    num8 = 0;
                    while (6 >= sum16) {
                      let sum17 = num12 + 1;
                      let iter3 = fn(sum17);
                      let tmp23 = null !== iter3;
                      if (tmp23) {
                        tmp23 = iter3.type === Delim;
                      }
                      if (tmp23) {
                        let value18 = iter3.value;
                        tmp23 = value18.charCodeAt(0) === 63;
                      }
                      num12 = sum17;
                      num3 = sum16;
                      num13 = sum17;
                      break;
                    }
                  }
                }
                num14 = num8;
              }
            }
            return num14;
          }
        }
      }
      obj8 = _mod12657;
    }
  }
  return 0;
};