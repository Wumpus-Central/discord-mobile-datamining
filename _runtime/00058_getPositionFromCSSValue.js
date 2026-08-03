function getPositionFromCSSValue(mapped) {
  if (mapped.endsWith("px")) {
    const _parseFloat = parseFloat;
    let parsed = parseFloat(mapped);
  } else {
    parsed = mapped;
    if (!mapped.endsWith("%")) {
      let num;
      if ("0" === mapped) {
        num = 0;
      }
      parsed = num;
    }
  }
  return parsed;
}
function isValidPosition(mapped) {
  const endsWithResult = mapped.endsWith("px");
  let tmp2 = !endsWithResult;
  if (!endsWithResult) {
    tmp2 = !mapped.endsWith("%");
  }
  if (tmp2) {
    tmp2 = "0" !== mapped;
  }
  return !tmp2;
}
function parseBackgroundPositionCSSString(str) {
  const items = [];
  const parts = str.split(",");
  let mapped = parts.map((str) => str.trim());
  const iter = mapped[Symbol.iterator]();
  while (iter !== undefined) {
    let str2;
    let str5;
    let parts1 = str.split(/\s+/);
    let found = parts1.filter((arg0) => arg0.length > 0);
    let arr5 = found;
    if (1 === found.length) {
      mapped = found;
      mapped = arr5[0];
      let str7 = mapped;
      if (null == mapped) {
        mapped = iter;
        let items1 = [];
        iter.return();
        return items1;
      } else {
        let str8 = str7.toLowerCase();
        mapped = str8.trim();
        if ("left" === mapped) {
          let str3 = "0%";
          str2 = "50%";
        } else {
          let tmp2 = mapped;
          if ("center" === mapped) {
            str3 = "50%";
            str2 = "50%";
          } else {
            let tmp3 = mapped;
            if ("right" === mapped) {
              str3 = "100%";
              str2 = "50%";
            } else {
              let tmp4 = mapped;
              if ("top" === mapped) {
                str3 = "50%";
                str2 = "0%";
              } else {
                let tmp5 = mapped;
                if ("bottom" === mapped) {
                  str3 = "50%";
                  str2 = "100%";
                } else {
                  let tmp6 = isValidPosition;
                  let tmp7 = mapped;
                  if (isValidPosition(mapped)) {
                    let tmp8 = getPositionFromCSSValue;
                    let tmp9 = mapped;
                    let tmp10 = getPositionFromCSSValue(mapped);
                    let tmp11 = tmp10;
                    if (null == tmp10) {
                      let tmp12 = iter;
                      let items2 = [];
                      iter.return();
                      return items2;
                    } else {
                      str3 = tmp10;
                      str2 = "50%";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let tmp13 = found;
    if (2 === arr5.length) {
      mapped = found;
      mapped = arr5[0];
      let str9 = mapped;
      let str10 = arr5[1];
      if (null != mapped) {
        mapped = str10;
        if (null != str10) {
          let str11 = str9.toLowerCase();
          mapped = str11.trim();
          if ("left" === mapped) {
            str3 = "0%";
          } else {
            let tmp14 = mapped;
            if ("center" === mapped) {
              str3 = "50%";
            } else {
              let tmp15 = mapped;
              if ("right" === mapped) {
                str3 = "100%";
              } else {
                let tmp16 = mapped;
                if ("top" === mapped) {
                  str2 = "0%";
                } else {
                  let tmp17 = mapped;
                  if ("bottom" === mapped) {
                    str2 = "100%";
                  } else {
                    let tmp18 = isValidPosition;
                    let tmp19 = mapped;
                    if (isValidPosition(mapped)) {
                      let tmp20 = getPositionFromCSSValue;
                      let tmp21 = mapped;
                      let tmp22 = getPositionFromCSSValue(mapped);
                      let tmp23 = tmp22;
                      if (null == tmp22) {
                        let tmp24 = iter;
                        let items3 = [];
                        iter.return();
                        return items3;
                      } else {
                        str3 = tmp22;
                      }
                    }
                  }
                }
              }
            }
          }
          let tmp25 = str10;
          let str6 = str10.toLowerCase();
          let trimmed = str6.trim();
          let tmp27 = trimmed;
          if ("top" === trimmed) {
            str2 = "0%";
          } else {
            let tmp28 = trimmed;
            if ("center" === tmp27) {
              str2 = "50%";
            } else {
              let tmp29 = trimmed;
              if ("bottom" === tmp27) {
                str2 = "100%";
              } else {
                let tmp30 = trimmed;
                if ("left" === tmp27) {
                  str3 = "0%";
                } else {
                  let tmp31 = trimmed;
                  if ("right" === tmp27) {
                    str3 = "100%";
                  } else {
                    let tmp32 = isValidPosition;
                    let tmp33 = trimmed;
                    if (isValidPosition(tmp27)) {
                      let tmp34 = getPositionFromCSSValue;
                      let tmp35 = trimmed;
                      let tmp36 = getPositionFromCSSValue(tmp27);
                      let tmp37 = tmp36;
                      if (null == tmp36) {
                        let tmp38 = iter;
                        let items4 = [];
                        iter.return();
                        return items4;
                      } else {
                        str2 = tmp36;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      mapped = iter;
      let items5 = [];
      iter.return();
      return items5;
    }
    let tmp39 = found;
    if (3 === arr5.length) {
      mapped = found;
      mapped = arr5[0];
      let str12 = mapped;
      let str13 = arr5[1];
      let str14 = arr5[2];
      if (null != mapped) {
        mapped = str13;
        if (null != str13) {
          mapped = str14;
          if (null != str14) {
            let str15 = str12.toLowerCase();
            mapped = str15.trim();
            mapped = str13;
            let str16 = str13.toLowerCase();
            mapped = str16.trim();
            mapped = str14;
            let str17 = str14.toLowerCase();
            mapped = str17.trim();
            if ("center" === mapped) {
              str3 = "50%";
              let tmp73 = getPositionFromCSSValue;
              let tmp74 = mapped;
              let tmp75 = getPositionFromCSSValue(mapped);
              let tmp76 = tmp75;
              if (null == tmp75) {
                mapped = iter;
                let items6 = [];
                iter.return();
                return items6;
              } else if ("top" === mapped) {
                str2 = tmp75;
              } else {
                let tmp77 = mapped;
                if ("bottom" !== mapped) {
                  let tmp78 = iter;
                  let items7 = [];
                  iter.return();
                  return items7;
                } else {
                  str5 = tmp75;
                }
              }
            } else if ("center" === mapped) {
              str2 = "50%";
              let tmp65 = getPositionFromCSSValue;
              let tmp66 = mapped;
              let tmp67 = getPositionFromCSSValue(mapped);
              let tmp68 = tmp67;
              if (null == tmp67) {
                let tmp72 = iter;
                let items8 = [];
                iter.return();
                return items8;
              } else {
                let tmp69 = mapped;
                if ("left" === mapped) {
                  str3 = tmp67;
                } else {
                  let tmp70 = mapped;
                  if ("right" !== mapped) {
                    let tmp71 = iter;
                    let items9 = [];
                    iter.return();
                    return items9;
                  } else {
                    let str4 = tmp67;
                  }
                }
              }
            } else {
              let items10 = [mapped, mapped, mapped];
              let arr22 = items10;
              let num = 0;
              if (0 < items10.length) {
                while (true) {
                  let tmp40 = items10;
                  let tmp41 = num;
                  let tmp42 = arr22[num];
                  let tmp43 = tmp42;
                  let tmp44 = isValidPosition;
                  if (isValidPosition(tmp42)) {
                    let tmp50 = getPositionFromCSSValue;
                    let tmp51 = tmp42;
                    let tmp52 = getPositionFromCSSValue(tmp43);
                    let tmp53 = tmp52;
                    if (null == tmp52) {
                      let tmp64 = iter;
                      let items11 = [];
                      iter.return();
                      return items11;
                    } else {
                      let tmp54 = items10;
                      let tmp55 = num;
                      let tmp56 = arr22[num - 1];
                      let tmp57 = tmp56;
                      if ("left" === tmp56) {
                        str3 = tmp52;
                      } else {
                        let tmp58 = tmp56;
                        if ("right" === tmp57) {
                          str4 = tmp52;
                        } else {
                          let tmp59 = tmp56;
                          if ("top" === tmp57) {
                            str2 = tmp52;
                          } else {
                            let tmp60 = tmp56;
                            if ("bottom" === tmp57) {
                              str5 = tmp52;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    let tmp45 = tmp42;
                    if ("left" === tmp43) {
                      str3 = "0%";
                    } else {
                      let tmp46 = tmp42;
                      if ("right" === tmp43) {
                        str4 = "0%";
                      } else {
                        let tmp47 = tmp42;
                        if ("top" === tmp43) {
                          str2 = "0%";
                        } else {
                          let tmp48 = tmp42;
                          if ("bottom" !== tmp43) {
                            break;
                          } else {
                            str5 = "0%";
                          }
                        }
                      }
                    }
                  }
                  let tmp61 = num;
                  let sum = num + 1;
                  num = sum;
                  let tmp63 = items10;
                  continue;
                }
                let tmp49 = iter;
                let items12 = [];
                iter.return();
                return items12;
              }
            }
          }
        }
      }
      mapped = iter;
      let items13 = [];
      iter.return();
      return items13;
    }
    let tmp79 = found;
    if (4 === arr5.length) {
      mapped = found;
      mapped = arr5.shift();
      let str18 = mapped;
      let str19 = arr5.shift();
      let str20 = arr5.shift();
      let str21 = arr5.shift();
      if (null != mapped) {
        mapped = str19;
        if (null != str19) {
          mapped = str20;
          if (null != str20) {
            mapped = str21;
            if (null != str21) {
              let str22 = str18.toLowerCase();
              mapped = str22.trim();
              mapped = str19;
              let str23 = str19.toLowerCase();
              mapped = str20;
              mapped = str23.trim();
              let str24 = str20.toLowerCase();
              mapped = str24.trim();
              mapped = str21;
              let str25 = str21.toLowerCase();
              mapped = getPositionFromCSSValue;
              mapped = str25.trim();
              mapped = getPositionFromCSSValue(mapped);
              mapped = getPositionFromCSSValue(mapped);
              if (null != mapped) {
                if (null != mapped) {
                  if ("left" === mapped) {
                    str3 = mapped;
                  } else {
                    let tmp80 = mapped;
                    if ("right" === mapped) {
                      str4 = mapped;
                    }
                  }
                  let tmp81 = mapped;
                  if ("top" === mapped) {
                    str2 = mapped;
                  } else {
                    let tmp82 = mapped;
                    if ("bottom" === mapped) {
                      str5 = mapped;
                    }
                  }
                }
              }
              mapped = iter;
              let items14 = [];
              iter.return();
              return items14;
            }
          }
        }
      }
      mapped = iter;
      let items15 = [];
      iter.return();
      return items15;
    }
    let tmp83 = str2;
    if (null != str2) {
      let tmp84 = str3;
      if (null != str3) {
        let obj = { top: null, left: null };
        mapped = str2;
        obj[0] = str2;
        mapped = str3;
        obj[1] = str3;
        mapped = items.push(obj);
        continue;
      }
    }
    let tmp85 = str5;
    if (null != str5) {
      let tmp86 = str4;
      if (null != str4) {
        obj = { bottom: null, right: null };
        let tmp98 = str5;
        obj[0] = str5;
        let tmp99 = str4;
        obj[1] = str4;
        mapped = items.push(obj);
      }
    }
    let tmp87 = str2;
    if (null != str2) {
      let tmp88 = str4;
      if (null != str4) {
        let obj1 = { top: null, right: null };
        let tmp95 = str2;
        obj1[0] = str2;
        let tmp96 = str4;
        obj1[1] = str4;
        let arr = items.push(obj1);
      }
    }
    let tmp89 = str5;
    if (null != str5) {
      let tmp90 = str3;
      if (null != str3) {
        obj = { bottom: null, left: null };
        let tmp91 = str5;
        obj[0] = str5;
        let tmp92 = str3;
        obj[1] = str3;
        arr = items.push(obj);
      }
    }
    let tmp94 = iter;
    let items16 = [];
    iter.return();
    return items16;
  }
  return items;
}
arg5.default = function processBackgroundPosition(str) {
  if (null == str) {
    let items = [];
  } else if (typeof str === "y") {
    items = parseBackgroundPositionCSSString(str.replace(/\n/g, " "));
  } else {
    items = [];
    const _Array = Array;
    if (Array.isArray(str)) {
      items = str;
    }
  }
  return items;
};