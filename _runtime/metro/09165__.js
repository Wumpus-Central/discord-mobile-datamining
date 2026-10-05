// _runtime/metro/09165__.js
let constants, hasOwnProperty, length2, mdaymask, mdaymask2, mmask, mmask2, mrange, mrange2, nmdaymask, nmdaymask2;

let self = this;
let fn = function m() {
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp4;
  let tmp52;
  let tmp7;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp8;
  let tmp9;
  const f151903 = (getTime, getTime2) => {
    const time = getTime.getTime();
    return time - getTime2.getTime();
  };
  function y(arg0, arg1, arg2) {
    let StringResult1;
    const StringResult = String(arg0);
    if (StringResult.length > arg1 >> 0) {
      const _String2 = String;
      StringResult1 = String(StringResult);
    } else {
      const diff = tmp - StringResult.length;
      let str = "0";
      if (diff > "0".length) {
        const result = diff / "0".length;
        if (typeof h === "function") {
          const items = [];
          if (isArray("0")) {
            let num4 = 0;
            if (0 < result) {
              do {
                let items1 = [];
                items[num4] = items1.concat("0");
                num4 = num4 + 1;
              } while (num4 < result);
            }
          } else {
            let num2 = 0;
            if (0 < result) {
              do {
                items[num2] = "0";
                num2 = num2 + 1;
              } while (num2 < result);
            }
          }
          str = `0${arr2}`;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const _String = String;
      const substr = str.slice(0, diff);
      StringResult1 = substr + String(StringResult);
    }
    return StringResult1;
  }
  function Q(arg0, arg1) {
    obj = {};
    if (typeof closure_46 === "function") {
      const obj2 = { done: true, rules: tmp2 };
      let flag = true;
      let tmp4 = null;
      if (obj2.start(arg0)) {
        let str = "every";
        obj2.expect("every");
        let acceptNumberResult = obj2.acceptNumber();
        if (acceptNumberResult) {
          let _parseInt = parseInt;
          let num = 10;
          obj.interval = parseInt(acceptNumberResult[0], 10);
        }
        if (obj2.isDone()) {
          const _Error20 = Error;
          const self57 = this;
          const self58 = this;
          let error = new Error("Unexpected end");
          throw error;
        } else {
          let str10;
          let str11;
          let formatted;
          let items2;
          let nextSymbolResult1;
          let acceptResult;
          let isDoneResult;
          let symbol4;
          let flag4;
          let byweekday;
          let symbol5;
          let error10;
          let str20;
          let str21;
          let error11;
          let symbol6;
          let flag5;
          let acceptResult4;
          let num19;
          let acceptResult5;
          let num18;
          let parsed7;
          let acceptResult6;
          let tmp54;
          let error12;
          let items3;
          let acceptResult7;
          let symbol7;
          let flag6;
          let acceptResult8;
          let num29;
          let acceptResult9;
          let num28;
          let parsed8;
          let acceptResult10;
          let tmp69;
          let bymonthday;
          let symbol8;
          let error13;
          let error14;
          let parsed9;
          let date7;
          let text2;
          let error15;
          let acceptResult12;
          let parsed10;
          let symbol;
          let flag2;
          let items4;
          let nextSymbolResult15;
          let acceptResult13;
          let isDoneResult1;
          let symbol2;
          let flag3;
          let bymonth;
          let symbol3;
          let error16;
          let error17;
          let parsed11;
          let date8;
          let text;
          let error18;
          let acceptResult15;
          let parsed12;
          fn = function i() {
            let parsed;
            const acceptResult = obj2.accept("on");
            if (acceptResult) {
              while (true) {
                let flag;
                let symbol = obj2.symbol;
                let str = "last";
                if ("last" === symbol) {
                  let nextSymbolResult = obj2.nextSymbol();
                  flag = -1;
                } else {
                  let str20 = "first";
                  if ("first" === symbol) {
                    let nextSymbolResult1 = obj2.nextSymbol();
                    flag = 1;
                  } else {
                    let str21 = "second";
                    if ("second" === symbol) {
                      let nextSymbolResult2 = obj2.nextSymbol();
                      let num3 = 2;
                      if (obj2.accept("last")) {
                        num3 = -2;
                      }
                      flag = num3;
                    } else {
                      let str22 = "third";
                      if ("third" === symbol) {
                        let nextSymbolResult3 = obj2.nextSymbol();
                        let num2 = 3;
                        if (obj2.accept("last")) {
                          num2 = -3;
                        }
                        flag = num2;
                      } else {
                        let str23 = "nth";
                        flag = false;
                        if ("nth" === symbol) {
                          let tmp43 = globalThis;
                          let _parseInt3 = parseInt;
                          parsed = parseInt(obj2.value[1], 10);
                          if (parsed < -366) {
                            break;
                          } else if (parsed > 366) {
                            break;
                          } else {
                            let nextSymbolResult4 = obj2.nextSymbol();
                            let tmp4 = parsed;
                            if (obj2.accept("last")) {
                              tmp4 = -parsed;
                            }
                            flag = tmp4;
                          }
                        }
                      }
                    }
                  }
                }
                let symbol2 = obj2.symbol;
                let str3 = "monday";
                if ("monday" !== symbol2) {
                  let str4 = "tuesday";
                  if ("tuesday" !== symbol2) {
                    let str5 = "wednesday";
                    if ("wednesday" !== symbol2) {
                      let str6 = "thursday";
                      if ("thursday" !== symbol2) {
                        let str7 = "friday";
                        if ("friday" !== symbol2) {
                          let flag2;
                          let str8 = "saturday";
                          if ("saturday" !== symbol2) {
                            let str9 = "sunday";
                            flag2 = false;
                          }
                          let flag3 = 12;
                          switch (obj2.symbol) {
                            case "january": {
                              flag3 = 1;
                              if (flag) {
                                if (flag2) {
                                  let nextSymbolResult5 = obj2.nextSymbol();
                                  let tmp40 = obj;
                                  if (!obj.byweekday) {
                                    tmp40.byweekday = [];
                                  }
                                  let byweekday = tmp40.byweekday;
                                  let obj3 = constants[flag2];
                                  let arr = byweekday.push(obj3.nth(flag));
                                  obj = obj2;
                                } else {
                                  let tmp36 = obj;
                                  if (!obj.bymonthday) {
                                    tmp36.bymonthday = [];
                                  }
                                  let bymonthday = tmp36.bymonthday;
                                  let arr2 = bymonthday.push(flag);
                                  let str18 = "day(s)";
                                  let acceptResult1 = obj2.accept("day(s)");
                                  obj = obj2;
                                }
                              } else if (flag2) {
                                let nextSymbolResult6 = obj2.nextSymbol();
                                let tmp33 = obj;
                                if (!obj.byweekday) {
                                  tmp33.byweekday = [];
                                }
                                let byweekday1 = tmp33.byweekday;
                                let arr3 = byweekday1.push(constants[flag2]);
                                obj = obj2;
                              } else {
                                let str12 = "weekday(s)";
                                if ("weekday(s)" === obj2.symbol) {
                                  let nextSymbolResult7 = obj2.nextSymbol();
                                  obj = obj2;
                                  if (!obj.byweekday) {
                                    let items = [constants.MO, constants.TU, constants.WE, constants.TH, constants.FR];
                                    tmp26.byweekday = items;
                                    obj = obj2;
                                  }
                                } else {
                                  let str24 = "week(s)";
                                  if ("week(s)" === obj2.symbol) {
                                    let nextSymbolResult8 = obj2.nextSymbol();
                                    let acceptNumberResult = obj2.acceptNumber();
                                    let tmp16 = globalThis;
                                    if (acceptNumberResult) {
                                      let _parseInt = parseInt;
                                      let items1 = [parseInt(acceptNumberResult[0], 10)];
                                      obj.byweekno = items1;
                                      let str15 = "comma";
                                      obj = obj2;
                                      if (obj2.accept("comma")) {
                                        let acceptNumberResult1 = obj2.acceptNumber();
                                        while (acceptNumberResult1) {
                                          let byweekno = obj.byweekno;
                                          let _parseInt2 = parseInt;
                                          let arr4 = byweekno.push(parseInt(acceptNumberResult1[0], 10));
                                          obj = obj2;
                                          continue;
                                        }
                                        let _Error3 = Error;
                                        let str16 = "Unexpected symbol ";
                                        let self5 = this;
                                        let str17 = "; expected monthday";
                                        let self6 = this;
                                        let error = new Error(
                                          "Unexpected symbol " + obj2.symbol + "; expected monthday",
                                        );
                                        throw error;
                                      }
                                    } else {
                                      let _Error2 = Error;
                                      let str13 = "Unexpected symbol ";
                                      let self3 = this;
                                      let str14 = ", expected week number";
                                      let self4 = this;
                                      let error1 = new Error(
                                        "Unexpected symbol " + obj2.symbol + ", expected week number",
                                      );
                                      throw error1;
                                    }
                                  } else if (flag3) {
                                    let nextSymbolResult9 = obj2.nextSymbol();
                                    let tmp12 = obj;
                                    if (!obj.bymonth) {
                                      tmp12.bymonth = [];
                                    }
                                    let bymonth = tmp12.bymonth;
                                    let arr5 = bymonth.push(flag3);
                                    obj = obj2;
                                  }
                                }
                              }
                              let str19 = "comma";
                              continue;
                              break;
                            }
                            case "february": {
                              flag3 = 2;
                              break;
                            }
                            case "march": {
                              flag3 = 3;
                              break;
                            }
                            case "april": {
                              flag3 = 4;
                              break;
                            }
                            case "may": {
                              flag3 = 5;
                              break;
                            }
                            case "june": {
                              flag3 = 6;
                              break;
                            }
                            case "july": {
                              flag3 = 7;
                              break;
                            }
                            case "august": {
                              flag3 = 8;
                              break;
                            }
                            case "september": {
                              flag3 = 9;
                              break;
                            }
                            case "october": {
                              flag3 = 10;
                              break;
                            }
                            case "november": {
                              flag3 = 11;
                              break;
                            }
                            case "december": {
                              break;
                            }
                            default: {
                              flag3 = false;
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let str10 = obj2.symbol;
                let str11 = str10.substr(0, 2);
                flag2 = str11.toUpperCase();
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error2 = new Error("Nth out of range: " + parsed);
              throw error2;
            }
          };
          switch (obj2.symbol) {
            case "day(s)": {
              obj.freq = constants.DAILY;
              tmp4 = obj;
              if (obj2.nextSymbol()) {
                if (obj2.accept("at")) {
                  let acceptNumberResult1 = obj2.acceptNumber();
                  while (acceptNumberResult1) {
                    let _parseInt10 = parseInt;
                    let items = [parseInt(acceptNumberResult1[0], 10)];
                    obj.byhour = items;
                    if (obj2.accept("comma")) {
                      let acceptNumberResult2 = obj2.acceptNumber();
                      while (acceptNumberResult2) {
                        let byhour = obj.byhour;
                        let _parseInt11 = parseInt;
                        let arr = byhour.push(parseInt(acceptNumberResult2[0], 10));
                        continue;
                      }
                      let _Error17 = Error;
                      let str68 = "Unexpected symbol ";
                      let self49 = this;
                      let str69 = "; expected hour";
                      let self50 = this;
                      let error1 = new Error("Unexpected symbol " + obj2.symbol + "; expected hour");
                      throw error1;
                    }
                    continue;
                  }
                  const _Error16 = Error;
                  const self47 = this;
                  const self48 = this;
                  let error2 = new Error("Unexpected symbol " + obj2.symbol + ", expected hour");
                  throw error2;
                }
                if ("until" === obj2.symbol) {
                  const _Date17 = Date;
                  let parsed = Date.parse(obj2.text);
                  if (parsed) {
                    const _Date18 = Date;
                    const self53 = this;
                    const self54 = this;
                    obj.until = new Date(parsed);
                    tmp4 = obj;
                    date = new Date(parsed);
                  } else {
                    const _Error18 = Error;
                    const self51 = this;
                    const self52 = this;
                    const error3 = new Error("Cannot parse until date:" + obj2.text);
                    throw error3;
                  }
                } else {
                  tmp4 = obj;
                  if (obj2.accept("for")) {
                    const _parseInt12 = parseInt;
                    obj.count = parseInt(obj2.value[0], 10);
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "weekday(s)": {
              obj.freq = constants.WEEKLY;
              let items1 = [, , , ,];
              ({ MO: arr7[0], TU: arr7[1], WE: arr7[2], TH: arr7[3], FR: arr7[4] } = constants);
              obj.byweekday = items1;
              let nextSymbolResult = obj2.nextSymbol();
              if ("until" === obj2.symbol) {
                const _Date15 = Date;
                const parsed1 = Date.parse(obj2.text);
                if (parsed1) {
                  const _Date16 = Date;
                  const self45 = this;
                  const self46 = this;
                  obj.until = new Date(parsed1);
                  tmp4 = obj;
                  const date1 = new Date(parsed1);
                } else {
                  const _Error15 = Error;
                  const self43 = this;
                  const self44 = this;
                  const error4 = new Error("Cannot parse until date:" + obj2.text);
                  throw error4;
                }
              } else {
                tmp4 = obj;
                if (obj2.accept("for")) {
                  const _parseInt9 = parseInt;
                  obj.count = parseInt(obj2.value[0], 10);
                  obj2.expect("number");
                  tmp4 = obj;
                }
              }
              break;
            }
            case "week(s)": {
              obj.freq = constants.WEEKLY;
              tmp4 = obj;
              if (obj2.nextSymbol()) {
                fn();
                if ("until" === obj2.symbol) {
                  const _Date13 = Date;
                  const parsed2 = Date.parse(obj2.text);
                  if (parsed2) {
                    const _Date14 = Date;
                    const self41 = this;
                    const self42 = this;
                    obj.until = new Date(parsed2);
                    tmp4 = obj;
                    const date2 = new Date(parsed2);
                  } else {
                    const _Error14 = Error;
                    const self39 = this;
                    const self40 = this;
                    const error5 = new Error("Cannot parse until date:" + obj2.text);
                    throw error5;
                  }
                } else {
                  tmp4 = obj;
                  if (obj2.accept("for")) {
                    const _parseInt8 = parseInt;
                    obj.count = parseInt(obj2.value[0], 10);
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "hour(s)": {
              obj.freq = constants.HOURLY;
              tmp4 = obj;
              if (obj2.nextSymbol()) {
                fn();
                if ("until" === obj2.symbol) {
                  const _Date11 = Date;
                  const parsed3 = Date.parse(obj2.text);
                  if (parsed3) {
                    const _Date12 = Date;
                    const self37 = this;
                    const self38 = this;
                    obj.until = new Date(parsed3);
                    tmp4 = obj;
                    const date3 = new Date(parsed3);
                  } else {
                    const _Error13 = Error;
                    const self35 = this;
                    const self36 = this;
                    const error6 = new Error("Cannot parse until date:" + obj2.text);
                    throw error6;
                  }
                } else {
                  tmp4 = obj;
                  if (obj2.accept("for")) {
                    const _parseInt7 = parseInt;
                    obj.count = parseInt(obj2.value[0], 10);
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "minute(s)": {
              obj.freq = constants.MINUTELY;
              tmp4 = obj;
              if (obj2.nextSymbol()) {
                fn();
                if ("until" === obj2.symbol) {
                  const _Date9 = Date;
                  const parsed4 = Date.parse(obj2.text);
                  if (parsed4) {
                    const _Date10 = Date;
                    const self33 = this;
                    const self34 = this;
                    obj.until = new Date(parsed4);
                    tmp4 = obj;
                    const date4 = new Date(parsed4);
                  } else {
                    const _Error12 = Error;
                    const self31 = this;
                    const self32 = this;
                    const error7 = new Error("Cannot parse until date:" + obj2.text);
                    throw error7;
                  }
                } else {
                  tmp4 = obj;
                  if (obj2.accept("for")) {
                    const _parseInt6 = parseInt;
                    obj.count = parseInt(obj2.value[0], 10);
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "month(s)": {
              obj.freq = constants.MONTHLY;
              tmp4 = obj;
              if (obj2.nextSymbol()) {
                fn();
                if ("until" === obj2.symbol) {
                  const _Date7 = Date;
                  const parsed5 = Date.parse(obj2.text);
                  if (parsed5) {
                    const _Date8 = Date;
                    const self29 = this;
                    const self30 = this;
                    obj.until = new Date(parsed5);
                    tmp4 = obj;
                    const date5 = new Date(parsed5);
                  } else {
                    const _Error11 = Error;
                    const self27 = this;
                    const self28 = this;
                    const error8 = new Error("Cannot parse until date:" + obj2.text);
                    throw error8;
                  }
                } else {
                  tmp4 = obj;
                  if (obj2.accept("for")) {
                    const _parseInt5 = parseInt;
                    obj.count = parseInt(obj2.value[0], 10);
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "year(s)": {
              obj.freq = constants.YEARLY;
              tmp4 = obj;
              if (obj2.nextSymbol()) {
                fn();
                if ("until" === obj2.symbol) {
                  const _Date5 = Date;
                  const parsed6 = Date.parse(obj2.text);
                  if (parsed6) {
                    const _Date6 = Date;
                    const self25 = this;
                    const self26 = this;
                    obj.until = new Date(parsed6);
                    tmp4 = obj;
                    const date6 = new Date(parsed6);
                  } else {
                    const _Error10 = Error;
                    const self23 = this;
                    const self24 = this;
                    const error9 = new Error("Cannot parse until date:" + obj2.text);
                    throw error9;
                  }
                } else {
                  tmp4 = obj;
                  if (obj2.accept("for")) {
                    const _parseInt4 = parseInt;
                    obj.count = parseInt(obj2.value[0], 10);
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "monday": {
              let tmp36 = constants;
              obj.freq = constants.WEEKLY;
              str10 = obj2.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj2.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let str12 = "comma";
                acceptResult = obj2.accept("comma");
                let str13 = "sunday";
                let str14 = "saturday";
                let str15 = "friday";
                let str16 = "thursday";
                let str17 = "wednesday";
                let str18 = "tuesday";
                let str19 = "monday";
                if (acceptResult) {
                  isDoneResult = obj2.isDone();
                  while (!isDoneResult) {
                    symbol4 = obj2.symbol;
                    if ("monday" !== symbol4) {
                      if ("tuesday" !== symbol4) {
                        if ("wednesday" !== symbol4) {
                          if ("thursday" !== symbol4) {
                            if ("friday" !== symbol4) {
                              if ("saturday" !== symbol4) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                let arr2 = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj2.nextSymbol();
                                let acceptResult1 = obj2.accept("comma");
                              } else {
                                let tmp41 = globalThis;
                                let _Error4 = Error;
                                symbol5 = obj2.symbol;
                                let str22 = "Unexpected symbol ";
                                let text1 = `Unexpected symbol ${symbol5}`;
                                let self9 = this;
                                let str23 = ", expected weekday";
                                let text3 = `Unexpected symbol ${symbol5}, expected weekday`;
                                let self10 = this;
                                error10 = new Error(`Unexpected symbol ${symbol5}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj2.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let self21 = this;
                  let self22 = this;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                let str24 = "on";
                obj2.accept("on");
                obj2.accept("the");
                symbol6 = obj2.symbol;
                if ("last" === symbol6) {
                  let nextSymbolResult3 = obj2.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol6) {
                  let nextSymbolResult4 = obj2.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol6) {
                  let nextSymbolResult5 = obj2.nextSymbol();
                  acceptResult4 = obj2.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol6) {
                  let nextSymbolResult6 = obj2.nextSymbol();
                  acceptResult5 = obj2.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol6) {
                    let _parseInt13 = parseInt;
                    parsed7 = parseInt(obj2.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        let nextSymbolResult7 = obj2.nextSymbol();
                        acceptResult6 = obj2.accept("last");
                        tmp54 = parsed7;
                        if (acceptResult6) {
                          tmp54 = -parsed7;
                        }
                        flag5 = tmp54;
                      }
                    }
                    let _Error5 = Error;
                    let text4 = `Nth out of range: ${tmp190}`;
                    let self11 = this;
                    let self12 = this;
                    error12 = new Error(`Nth out of range: ${tmp190}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  let nextSymbolResult8 = obj2.nextSymbol();
                  acceptResult7 = obj2.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol7 = obj2.symbol;
                      if ("last" === symbol7) {
                        let nextSymbolResult9 = obj2.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol7) {
                        let nextSymbolResult10 = obj2.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol7) {
                        let nextSymbolResult11 = obj2.nextSymbol();
                        acceptResult8 = obj2.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol7) {
                        let nextSymbolResult12 = obj2.nextSymbol();
                        acceptResult9 = obj2.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol7) {
                          let _parseInt14 = parseInt;
                          parsed8 = parseInt(obj2.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj2.nextSymbol();
                            acceptResult10 = obj2.accept("last");
                            tmp69 = parsed8;
                            if (acceptResult10) {
                              tmp69 = -parsed8;
                            }
                            flag6 = tmp69;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        let arr3 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj2.nextSymbol();
                        let acceptResult11 = obj2.accept("comma");
                      } else {
                        let _Error7 = Error;
                        symbol8 = obj2.symbol;
                        let str33 = "Unexpected symbol ";
                        let text5 = `Unexpected symbol ${symbol8}`;
                        let self15 = this;
                        let str34 = "; expected monthday";
                        let text6 = `Unexpected symbol ${symbol8}; expected monthday`;
                        let self16 = this;
                        error13 = new Error(`Unexpected symbol ${symbol8}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text7 = `Nth out of range: ${tmp191}`;
                    let self13 = this;
                    let self14 = this;
                    error14 = new Error(`Nth out of range: ${tmp191}`);
                    throw error14;
                  }
                }
                if ("until" === obj2.symbol) {
                  let _Date3 = Date;
                  parsed9 = Date.parse(obj2.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let self19 = this;
                    let self20 = this;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj2.text;
                    let text8 = `Cannot parse until date:${text2}`;
                    let self17 = this;
                    let self18 = this;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj2.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    parsed10 = parseInt(obj2.value[0], 10);
                    obj.count = parsed10;
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "tuesday": {
              let tmp36 = constants;
              obj.freq = constants.WEEKLY;
              str10 = obj2.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj2.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let str12 = "comma";
                acceptResult = obj2.accept("comma");
                let str13 = "sunday";
                let str14 = "saturday";
                let str15 = "friday";
                let str16 = "thursday";
                let str17 = "wednesday";
                let str18 = "tuesday";
                let str19 = "monday";
                if (acceptResult) {
                  isDoneResult = obj2.isDone();
                  while (!isDoneResult) {
                    symbol4 = obj2.symbol;
                    if ("monday" !== symbol4) {
                      if ("tuesday" !== symbol4) {
                        if ("wednesday" !== symbol4) {
                          if ("thursday" !== symbol4) {
                            if ("friday" !== symbol4) {
                              if ("saturday" !== symbol4) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                let arr2 = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj2.nextSymbol();
                                let acceptResult1 = obj2.accept("comma");
                              } else {
                                let tmp41 = globalThis;
                                let _Error4 = Error;
                                symbol5 = obj2.symbol;
                                let str22 = "Unexpected symbol ";
                                let text1 = `Unexpected symbol ${symbol5}`;
                                let self9 = this;
                                let str23 = ", expected weekday";
                                let text3 = `Unexpected symbol ${symbol5}, expected weekday`;
                                let self10 = this;
                                error10 = new Error(`Unexpected symbol ${symbol5}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj2.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let self21 = this;
                  let self22 = this;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                let str24 = "on";
                obj2.accept("on");
                obj2.accept("the");
                symbol6 = obj2.symbol;
                if ("last" === symbol6) {
                  let nextSymbolResult3 = obj2.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol6) {
                  let nextSymbolResult4 = obj2.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol6) {
                  let nextSymbolResult5 = obj2.nextSymbol();
                  acceptResult4 = obj2.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol6) {
                  let nextSymbolResult6 = obj2.nextSymbol();
                  acceptResult5 = obj2.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol6) {
                    let _parseInt13 = parseInt;
                    parsed7 = parseInt(obj2.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        let nextSymbolResult7 = obj2.nextSymbol();
                        acceptResult6 = obj2.accept("last");
                        tmp54 = parsed7;
                        if (acceptResult6) {
                          tmp54 = -parsed7;
                        }
                        flag5 = tmp54;
                      }
                    }
                    let _Error5 = Error;
                    let text4 = `Nth out of range: ${tmp190}`;
                    let self11 = this;
                    let self12 = this;
                    error12 = new Error(`Nth out of range: ${tmp190}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  let nextSymbolResult8 = obj2.nextSymbol();
                  acceptResult7 = obj2.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol7 = obj2.symbol;
                      if ("last" === symbol7) {
                        let nextSymbolResult9 = obj2.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol7) {
                        let nextSymbolResult10 = obj2.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol7) {
                        let nextSymbolResult11 = obj2.nextSymbol();
                        acceptResult8 = obj2.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol7) {
                        let nextSymbolResult12 = obj2.nextSymbol();
                        acceptResult9 = obj2.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol7) {
                          let _parseInt14 = parseInt;
                          parsed8 = parseInt(obj2.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj2.nextSymbol();
                            acceptResult10 = obj2.accept("last");
                            tmp69 = parsed8;
                            if (acceptResult10) {
                              tmp69 = -parsed8;
                            }
                            flag6 = tmp69;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        let arr3 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj2.nextSymbol();
                        let acceptResult11 = obj2.accept("comma");
                      } else {
                        let _Error7 = Error;
                        symbol8 = obj2.symbol;
                        let str33 = "Unexpected symbol ";
                        let text5 = `Unexpected symbol ${symbol8}`;
                        let self15 = this;
                        let str34 = "; expected monthday";
                        let text6 = `Unexpected symbol ${symbol8}; expected monthday`;
                        let self16 = this;
                        error13 = new Error(`Unexpected symbol ${symbol8}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text7 = `Nth out of range: ${tmp191}`;
                    let self13 = this;
                    let self14 = this;
                    error14 = new Error(`Nth out of range: ${tmp191}`);
                    throw error14;
                  }
                }
                if ("until" === obj2.symbol) {
                  let _Date3 = Date;
                  parsed9 = Date.parse(obj2.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let self19 = this;
                    let self20 = this;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj2.text;
                    let text8 = `Cannot parse until date:${text2}`;
                    let self17 = this;
                    let self18 = this;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj2.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    parsed10 = parseInt(obj2.value[0], 10);
                    obj.count = parsed10;
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "wednesday": {
              let tmp36 = constants;
              obj.freq = constants.WEEKLY;
              str10 = obj2.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj2.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let str12 = "comma";
                acceptResult = obj2.accept("comma");
                let str13 = "sunday";
                let str14 = "saturday";
                let str15 = "friday";
                let str16 = "thursday";
                let str17 = "wednesday";
                let str18 = "tuesday";
                let str19 = "monday";
                if (acceptResult) {
                  isDoneResult = obj2.isDone();
                  while (!isDoneResult) {
                    symbol4 = obj2.symbol;
                    if ("monday" !== symbol4) {
                      if ("tuesday" !== symbol4) {
                        if ("wednesday" !== symbol4) {
                          if ("thursday" !== symbol4) {
                            if ("friday" !== symbol4) {
                              if ("saturday" !== symbol4) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                let arr2 = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj2.nextSymbol();
                                let acceptResult1 = obj2.accept("comma");
                              } else {
                                let tmp41 = globalThis;
                                let _Error4 = Error;
                                symbol5 = obj2.symbol;
                                let str22 = "Unexpected symbol ";
                                let text1 = `Unexpected symbol ${symbol5}`;
                                let self9 = this;
                                let str23 = ", expected weekday";
                                let text3 = `Unexpected symbol ${symbol5}, expected weekday`;
                                let self10 = this;
                                error10 = new Error(`Unexpected symbol ${symbol5}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj2.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let self21 = this;
                  let self22 = this;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                let str24 = "on";
                obj2.accept("on");
                obj2.accept("the");
                symbol6 = obj2.symbol;
                if ("last" === symbol6) {
                  let nextSymbolResult3 = obj2.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol6) {
                  let nextSymbolResult4 = obj2.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol6) {
                  let nextSymbolResult5 = obj2.nextSymbol();
                  acceptResult4 = obj2.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol6) {
                  let nextSymbolResult6 = obj2.nextSymbol();
                  acceptResult5 = obj2.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol6) {
                    let _parseInt13 = parseInt;
                    parsed7 = parseInt(obj2.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        let nextSymbolResult7 = obj2.nextSymbol();
                        acceptResult6 = obj2.accept("last");
                        tmp54 = parsed7;
                        if (acceptResult6) {
                          tmp54 = -parsed7;
                        }
                        flag5 = tmp54;
                      }
                    }
                    let _Error5 = Error;
                    let text4 = `Nth out of range: ${tmp190}`;
                    let self11 = this;
                    let self12 = this;
                    error12 = new Error(`Nth out of range: ${tmp190}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  let nextSymbolResult8 = obj2.nextSymbol();
                  acceptResult7 = obj2.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol7 = obj2.symbol;
                      if ("last" === symbol7) {
                        let nextSymbolResult9 = obj2.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol7) {
                        let nextSymbolResult10 = obj2.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol7) {
                        let nextSymbolResult11 = obj2.nextSymbol();
                        acceptResult8 = obj2.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol7) {
                        let nextSymbolResult12 = obj2.nextSymbol();
                        acceptResult9 = obj2.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol7) {
                          let _parseInt14 = parseInt;
                          parsed8 = parseInt(obj2.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj2.nextSymbol();
                            acceptResult10 = obj2.accept("last");
                            tmp69 = parsed8;
                            if (acceptResult10) {
                              tmp69 = -parsed8;
                            }
                            flag6 = tmp69;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        let arr3 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj2.nextSymbol();
                        let acceptResult11 = obj2.accept("comma");
                      } else {
                        let _Error7 = Error;
                        symbol8 = obj2.symbol;
                        let str33 = "Unexpected symbol ";
                        let text5 = `Unexpected symbol ${symbol8}`;
                        let self15 = this;
                        let str34 = "; expected monthday";
                        let text6 = `Unexpected symbol ${symbol8}; expected monthday`;
                        let self16 = this;
                        error13 = new Error(`Unexpected symbol ${symbol8}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text7 = `Nth out of range: ${tmp191}`;
                    let self13 = this;
                    let self14 = this;
                    error14 = new Error(`Nth out of range: ${tmp191}`);
                    throw error14;
                  }
                }
                if ("until" === obj2.symbol) {
                  let _Date3 = Date;
                  parsed9 = Date.parse(obj2.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let self19 = this;
                    let self20 = this;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj2.text;
                    let text8 = `Cannot parse until date:${text2}`;
                    let self17 = this;
                    let self18 = this;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj2.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    parsed10 = parseInt(obj2.value[0], 10);
                    obj.count = parsed10;
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "thursday": {
              let tmp36 = constants;
              obj.freq = constants.WEEKLY;
              str10 = obj2.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj2.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let str12 = "comma";
                acceptResult = obj2.accept("comma");
                let str13 = "sunday";
                let str14 = "saturday";
                let str15 = "friday";
                let str16 = "thursday";
                let str17 = "wednesday";
                let str18 = "tuesday";
                let str19 = "monday";
                if (acceptResult) {
                  isDoneResult = obj2.isDone();
                  while (!isDoneResult) {
                    symbol4 = obj2.symbol;
                    if ("monday" !== symbol4) {
                      if ("tuesday" !== symbol4) {
                        if ("wednesday" !== symbol4) {
                          if ("thursday" !== symbol4) {
                            if ("friday" !== symbol4) {
                              if ("saturday" !== symbol4) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                let arr2 = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj2.nextSymbol();
                                let acceptResult1 = obj2.accept("comma");
                              } else {
                                let tmp41 = globalThis;
                                let _Error4 = Error;
                                symbol5 = obj2.symbol;
                                let str22 = "Unexpected symbol ";
                                let text1 = `Unexpected symbol ${symbol5}`;
                                let self9 = this;
                                let str23 = ", expected weekday";
                                let text3 = `Unexpected symbol ${symbol5}, expected weekday`;
                                let self10 = this;
                                error10 = new Error(`Unexpected symbol ${symbol5}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj2.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let self21 = this;
                  let self22 = this;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                let str24 = "on";
                obj2.accept("on");
                obj2.accept("the");
                symbol6 = obj2.symbol;
                if ("last" === symbol6) {
                  let nextSymbolResult3 = obj2.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol6) {
                  let nextSymbolResult4 = obj2.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol6) {
                  let nextSymbolResult5 = obj2.nextSymbol();
                  acceptResult4 = obj2.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol6) {
                  let nextSymbolResult6 = obj2.nextSymbol();
                  acceptResult5 = obj2.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol6) {
                    let _parseInt13 = parseInt;
                    parsed7 = parseInt(obj2.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        let nextSymbolResult7 = obj2.nextSymbol();
                        acceptResult6 = obj2.accept("last");
                        tmp54 = parsed7;
                        if (acceptResult6) {
                          tmp54 = -parsed7;
                        }
                        flag5 = tmp54;
                      }
                    }
                    let _Error5 = Error;
                    let text4 = `Nth out of range: ${tmp190}`;
                    let self11 = this;
                    let self12 = this;
                    error12 = new Error(`Nth out of range: ${tmp190}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  let nextSymbolResult8 = obj2.nextSymbol();
                  acceptResult7 = obj2.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol7 = obj2.symbol;
                      if ("last" === symbol7) {
                        let nextSymbolResult9 = obj2.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol7) {
                        let nextSymbolResult10 = obj2.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol7) {
                        let nextSymbolResult11 = obj2.nextSymbol();
                        acceptResult8 = obj2.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol7) {
                        let nextSymbolResult12 = obj2.nextSymbol();
                        acceptResult9 = obj2.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol7) {
                          let _parseInt14 = parseInt;
                          parsed8 = parseInt(obj2.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj2.nextSymbol();
                            acceptResult10 = obj2.accept("last");
                            tmp69 = parsed8;
                            if (acceptResult10) {
                              tmp69 = -parsed8;
                            }
                            flag6 = tmp69;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        let arr3 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj2.nextSymbol();
                        let acceptResult11 = obj2.accept("comma");
                      } else {
                        let _Error7 = Error;
                        symbol8 = obj2.symbol;
                        let str33 = "Unexpected symbol ";
                        let text5 = `Unexpected symbol ${symbol8}`;
                        let self15 = this;
                        let str34 = "; expected monthday";
                        let text6 = `Unexpected symbol ${symbol8}; expected monthday`;
                        let self16 = this;
                        error13 = new Error(`Unexpected symbol ${symbol8}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text7 = `Nth out of range: ${tmp191}`;
                    let self13 = this;
                    let self14 = this;
                    error14 = new Error(`Nth out of range: ${tmp191}`);
                    throw error14;
                  }
                }
                if ("until" === obj2.symbol) {
                  let _Date3 = Date;
                  parsed9 = Date.parse(obj2.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let self19 = this;
                    let self20 = this;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj2.text;
                    let text8 = `Cannot parse until date:${text2}`;
                    let self17 = this;
                    let self18 = this;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj2.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    parsed10 = parseInt(obj2.value[0], 10);
                    obj.count = parsed10;
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "friday": {
              let tmp36 = constants;
              obj.freq = constants.WEEKLY;
              str10 = obj2.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj2.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let str12 = "comma";
                acceptResult = obj2.accept("comma");
                let str13 = "sunday";
                let str14 = "saturday";
                let str15 = "friday";
                let str16 = "thursday";
                let str17 = "wednesday";
                let str18 = "tuesday";
                let str19 = "monday";
                if (acceptResult) {
                  isDoneResult = obj2.isDone();
                  while (!isDoneResult) {
                    symbol4 = obj2.symbol;
                    if ("monday" !== symbol4) {
                      if ("tuesday" !== symbol4) {
                        if ("wednesday" !== symbol4) {
                          if ("thursday" !== symbol4) {
                            if ("friday" !== symbol4) {
                              if ("saturday" !== symbol4) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                let arr2 = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj2.nextSymbol();
                                let acceptResult1 = obj2.accept("comma");
                              } else {
                                let tmp41 = globalThis;
                                let _Error4 = Error;
                                symbol5 = obj2.symbol;
                                let str22 = "Unexpected symbol ";
                                let text1 = `Unexpected symbol ${symbol5}`;
                                let self9 = this;
                                let str23 = ", expected weekday";
                                let text3 = `Unexpected symbol ${symbol5}, expected weekday`;
                                let self10 = this;
                                error10 = new Error(`Unexpected symbol ${symbol5}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj2.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let self21 = this;
                  let self22 = this;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                let str24 = "on";
                obj2.accept("on");
                obj2.accept("the");
                symbol6 = obj2.symbol;
                if ("last" === symbol6) {
                  let nextSymbolResult3 = obj2.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol6) {
                  let nextSymbolResult4 = obj2.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol6) {
                  let nextSymbolResult5 = obj2.nextSymbol();
                  acceptResult4 = obj2.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol6) {
                  let nextSymbolResult6 = obj2.nextSymbol();
                  acceptResult5 = obj2.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol6) {
                    let _parseInt13 = parseInt;
                    parsed7 = parseInt(obj2.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        let nextSymbolResult7 = obj2.nextSymbol();
                        acceptResult6 = obj2.accept("last");
                        tmp54 = parsed7;
                        if (acceptResult6) {
                          tmp54 = -parsed7;
                        }
                        flag5 = tmp54;
                      }
                    }
                    let _Error5 = Error;
                    let text4 = `Nth out of range: ${tmp190}`;
                    let self11 = this;
                    let self12 = this;
                    error12 = new Error(`Nth out of range: ${tmp190}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  let nextSymbolResult8 = obj2.nextSymbol();
                  acceptResult7 = obj2.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol7 = obj2.symbol;
                      if ("last" === symbol7) {
                        let nextSymbolResult9 = obj2.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol7) {
                        let nextSymbolResult10 = obj2.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol7) {
                        let nextSymbolResult11 = obj2.nextSymbol();
                        acceptResult8 = obj2.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol7) {
                        let nextSymbolResult12 = obj2.nextSymbol();
                        acceptResult9 = obj2.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol7) {
                          let _parseInt14 = parseInt;
                          parsed8 = parseInt(obj2.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj2.nextSymbol();
                            acceptResult10 = obj2.accept("last");
                            tmp69 = parsed8;
                            if (acceptResult10) {
                              tmp69 = -parsed8;
                            }
                            flag6 = tmp69;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        let arr3 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj2.nextSymbol();
                        let acceptResult11 = obj2.accept("comma");
                      } else {
                        let _Error7 = Error;
                        symbol8 = obj2.symbol;
                        let str33 = "Unexpected symbol ";
                        let text5 = `Unexpected symbol ${symbol8}`;
                        let self15 = this;
                        let str34 = "; expected monthday";
                        let text6 = `Unexpected symbol ${symbol8}; expected monthday`;
                        let self16 = this;
                        error13 = new Error(`Unexpected symbol ${symbol8}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text7 = `Nth out of range: ${tmp191}`;
                    let self13 = this;
                    let self14 = this;
                    error14 = new Error(`Nth out of range: ${tmp191}`);
                    throw error14;
                  }
                }
                if ("until" === obj2.symbol) {
                  let _Date3 = Date;
                  parsed9 = Date.parse(obj2.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let self19 = this;
                    let self20 = this;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj2.text;
                    let text8 = `Cannot parse until date:${text2}`;
                    let self17 = this;
                    let self18 = this;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj2.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    parsed10 = parseInt(obj2.value[0], 10);
                    obj.count = parsed10;
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "saturday": {
              let tmp36 = constants;
              obj.freq = constants.WEEKLY;
              str10 = obj2.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj2.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let str12 = "comma";
                acceptResult = obj2.accept("comma");
                let str13 = "sunday";
                let str14 = "saturday";
                let str15 = "friday";
                let str16 = "thursday";
                let str17 = "wednesday";
                let str18 = "tuesday";
                let str19 = "monday";
                if (acceptResult) {
                  isDoneResult = obj2.isDone();
                  while (!isDoneResult) {
                    symbol4 = obj2.symbol;
                    if ("monday" !== symbol4) {
                      if ("tuesday" !== symbol4) {
                        if ("wednesday" !== symbol4) {
                          if ("thursday" !== symbol4) {
                            if ("friday" !== symbol4) {
                              if ("saturday" !== symbol4) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                let arr2 = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj2.nextSymbol();
                                let acceptResult1 = obj2.accept("comma");
                              } else {
                                let tmp41 = globalThis;
                                let _Error4 = Error;
                                symbol5 = obj2.symbol;
                                let str22 = "Unexpected symbol ";
                                let text1 = `Unexpected symbol ${symbol5}`;
                                let self9 = this;
                                let str23 = ", expected weekday";
                                let text3 = `Unexpected symbol ${symbol5}, expected weekday`;
                                let self10 = this;
                                error10 = new Error(`Unexpected symbol ${symbol5}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj2.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let self21 = this;
                  let self22 = this;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                let str24 = "on";
                obj2.accept("on");
                obj2.accept("the");
                symbol6 = obj2.symbol;
                if ("last" === symbol6) {
                  let nextSymbolResult3 = obj2.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol6) {
                  let nextSymbolResult4 = obj2.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol6) {
                  let nextSymbolResult5 = obj2.nextSymbol();
                  acceptResult4 = obj2.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol6) {
                  let nextSymbolResult6 = obj2.nextSymbol();
                  acceptResult5 = obj2.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol6) {
                    let _parseInt13 = parseInt;
                    parsed7 = parseInt(obj2.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        let nextSymbolResult7 = obj2.nextSymbol();
                        acceptResult6 = obj2.accept("last");
                        tmp54 = parsed7;
                        if (acceptResult6) {
                          tmp54 = -parsed7;
                        }
                        flag5 = tmp54;
                      }
                    }
                    let _Error5 = Error;
                    let text4 = `Nth out of range: ${tmp190}`;
                    let self11 = this;
                    let self12 = this;
                    error12 = new Error(`Nth out of range: ${tmp190}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  let nextSymbolResult8 = obj2.nextSymbol();
                  acceptResult7 = obj2.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol7 = obj2.symbol;
                      if ("last" === symbol7) {
                        let nextSymbolResult9 = obj2.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol7) {
                        let nextSymbolResult10 = obj2.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol7) {
                        let nextSymbolResult11 = obj2.nextSymbol();
                        acceptResult8 = obj2.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol7) {
                        let nextSymbolResult12 = obj2.nextSymbol();
                        acceptResult9 = obj2.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol7) {
                          let _parseInt14 = parseInt;
                          parsed8 = parseInt(obj2.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj2.nextSymbol();
                            acceptResult10 = obj2.accept("last");
                            tmp69 = parsed8;
                            if (acceptResult10) {
                              tmp69 = -parsed8;
                            }
                            flag6 = tmp69;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        let arr3 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj2.nextSymbol();
                        let acceptResult11 = obj2.accept("comma");
                      } else {
                        let _Error7 = Error;
                        symbol8 = obj2.symbol;
                        let str33 = "Unexpected symbol ";
                        let text5 = `Unexpected symbol ${symbol8}`;
                        let self15 = this;
                        let str34 = "; expected monthday";
                        let text6 = `Unexpected symbol ${symbol8}; expected monthday`;
                        let self16 = this;
                        error13 = new Error(`Unexpected symbol ${symbol8}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text7 = `Nth out of range: ${tmp191}`;
                    let self13 = this;
                    let self14 = this;
                    error14 = new Error(`Nth out of range: ${tmp191}`);
                    throw error14;
                  }
                }
                if ("until" === obj2.symbol) {
                  let _Date3 = Date;
                  parsed9 = Date.parse(obj2.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let self19 = this;
                    let self20 = this;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj2.text;
                    let text8 = `Cannot parse until date:${text2}`;
                    let self17 = this;
                    let self18 = this;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj2.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    parsed10 = parseInt(obj2.value[0], 10);
                    obj.count = parsed10;
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "sunday": {
              let tmp36 = constants;
              obj.freq = constants.WEEKLY;
              str10 = obj2.symbol;
              str11 = str10.substr(0, 2);
              formatted = str11.toUpperCase();
              items2 = [constants[formatted]];
              obj.byweekday = items2;
              nextSymbolResult1 = obj2.nextSymbol();
              tmp4 = obj;
              if (nextSymbolResult1) {
                let str12 = "comma";
                acceptResult = obj2.accept("comma");
                let str13 = "sunday";
                let str14 = "saturday";
                let str15 = "friday";
                let str16 = "thursday";
                let str17 = "wednesday";
                let str18 = "tuesday";
                let str19 = "monday";
                if (acceptResult) {
                  isDoneResult = obj2.isDone();
                  while (!isDoneResult) {
                    symbol4 = obj2.symbol;
                    if ("monday" !== symbol4) {
                      if ("tuesday" !== symbol4) {
                        if ("wednesday" !== symbol4) {
                          if ("thursday" !== symbol4) {
                            if ("friday" !== symbol4) {
                              if ("saturday" !== symbol4) {
                                flag4 = false;
                              }
                              if (flag4) {
                                byweekday = obj.byweekday;
                                let arr2 = byweekday.push(constants[flag4]);
                                let nextSymbolResult2 = obj2.nextSymbol();
                                let acceptResult1 = obj2.accept("comma");
                              } else {
                                let tmp41 = globalThis;
                                let _Error4 = Error;
                                symbol5 = obj2.symbol;
                                let str22 = "Unexpected symbol ";
                                let text1 = `Unexpected symbol ${symbol5}`;
                                let self9 = this;
                                let str23 = ", expected weekday";
                                let text3 = `Unexpected symbol ${symbol5}, expected weekday`;
                                let self10 = this;
                                error10 = new Error(`Unexpected symbol ${symbol5}, expected weekday`);
                                throw error10;
                              }
                            }
                          }
                        }
                      }
                    }
                    str20 = obj2.symbol;
                    str21 = str20.substr(0, 2);
                    flag4 = str21.toUpperCase();
                  }
                  let _Error9 = Error;
                  let self21 = this;
                  let self22 = this;
                  error11 = new Error("Unexpected end");
                  throw error11;
                }
                let str24 = "on";
                obj2.accept("on");
                obj2.accept("the");
                symbol6 = obj2.symbol;
                if ("last" === symbol6) {
                  let nextSymbolResult3 = obj2.nextSymbol();
                  flag5 = -1;
                } else if ("first" === symbol6) {
                  let nextSymbolResult4 = obj2.nextSymbol();
                  flag5 = 1;
                } else if ("second" === symbol6) {
                  let nextSymbolResult5 = obj2.nextSymbol();
                  acceptResult4 = obj2.accept("last");
                  num19 = 2;
                  if (acceptResult4) {
                    num19 = -2;
                  }
                  flag5 = num19;
                } else if ("third" === symbol6) {
                  let nextSymbolResult6 = obj2.nextSymbol();
                  acceptResult5 = obj2.accept("last");
                  num18 = 3;
                  if (acceptResult5) {
                    num18 = -3;
                  }
                  flag5 = num18;
                } else {
                  flag5 = false;
                  if ("nth" === symbol6) {
                    let _parseInt13 = parseInt;
                    parsed7 = parseInt(obj2.value[1], 10);
                    if (parsed7 >= -366) {
                      if (parsed7 <= 366) {
                        let nextSymbolResult7 = obj2.nextSymbol();
                        acceptResult6 = obj2.accept("last");
                        tmp54 = parsed7;
                        if (acceptResult6) {
                          tmp54 = -parsed7;
                        }
                        flag5 = tmp54;
                      }
                    }
                    let _Error5 = Error;
                    let text4 = `Nth out of range: ${tmp190}`;
                    let self11 = this;
                    let self12 = this;
                    error12 = new Error(`Nth out of range: ${tmp190}`);
                    throw error12;
                  }
                }
                if (flag5) {
                  items3 = [flag5];
                  obj.bymonthday = items3;
                  let nextSymbolResult8 = obj2.nextSymbol();
                  acceptResult7 = obj2.accept("comma");
                  if (acceptResult7) {
                    while (true) {
                      symbol7 = obj2.symbol;
                      if ("last" === symbol7) {
                        let nextSymbolResult9 = obj2.nextSymbol();
                        flag6 = -1;
                      } else if ("first" === symbol7) {
                        let nextSymbolResult10 = obj2.nextSymbol();
                        flag6 = 1;
                      } else if ("second" === symbol7) {
                        let nextSymbolResult11 = obj2.nextSymbol();
                        acceptResult8 = obj2.accept("last");
                        num29 = 2;
                        if (acceptResult8) {
                          num29 = -2;
                        }
                        flag6 = num29;
                      } else if ("third" === symbol7) {
                        let nextSymbolResult12 = obj2.nextSymbol();
                        acceptResult9 = obj2.accept("last");
                        num28 = 3;
                        if (acceptResult9) {
                          num28 = -3;
                        }
                        flag6 = num28;
                      } else {
                        flag6 = false;
                        if ("nth" === symbol7) {
                          let _parseInt14 = parseInt;
                          parsed8 = parseInt(obj2.value[1], 10);
                          if (parsed8 < -366) {
                            break;
                          } else if (parsed8 > 366) {
                            break;
                          } else {
                            let nextSymbolResult13 = obj2.nextSymbol();
                            acceptResult10 = obj2.accept("last");
                            tmp69 = parsed8;
                            if (acceptResult10) {
                              tmp69 = -parsed8;
                            }
                            flag6 = tmp69;
                          }
                        }
                      }
                      if (flag6) {
                        bymonthday = obj.bymonthday;
                        let arr3 = bymonthday.push(flag6);
                        let nextSymbolResult14 = obj2.nextSymbol();
                        let acceptResult11 = obj2.accept("comma");
                      } else {
                        let _Error7 = Error;
                        symbol8 = obj2.symbol;
                        let str33 = "Unexpected symbol ";
                        let text5 = `Unexpected symbol ${symbol8}`;
                        let self15 = this;
                        let str34 = "; expected monthday";
                        let text6 = `Unexpected symbol ${symbol8}; expected monthday`;
                        let self16 = this;
                        error13 = new Error(`Unexpected symbol ${symbol8}; expected monthday`);
                        throw error13;
                      }
                    }
                    let _Error6 = Error;
                    let text7 = `Nth out of range: ${tmp191}`;
                    let self13 = this;
                    let self14 = this;
                    error14 = new Error(`Nth out of range: ${tmp191}`);
                    throw error14;
                  }
                }
                if ("until" === obj2.symbol) {
                  let _Date3 = Date;
                  parsed9 = Date.parse(obj2.text);
                  if (parsed9) {
                    let _Date4 = Date;
                    let self19 = this;
                    let self20 = this;
                    date7 = new Date(parsed9);
                    obj.until = date7;
                    tmp4 = obj;
                  } else {
                    let _Error8 = Error;
                    text2 = obj2.text;
                    let text8 = `Cannot parse until date:${text2}`;
                    let self17 = this;
                    let self18 = this;
                    error15 = new Error(`Cannot parse until date:${text2}`);
                    throw error15;
                  }
                } else {
                  acceptResult12 = obj2.accept("for");
                  tmp4 = obj;
                  if (acceptResult12) {
                    let _parseInt3 = parseInt;
                    parsed10 = parseInt(obj2.value[0], 10);
                    obj.count = parsed10;
                    obj2.expect("number");
                    tmp4 = obj;
                  }
                }
              }
              break;
            }
            case "january": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "february": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "march": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "april": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "may": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "june": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "july": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "august": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "september": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "october": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "november": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            case "december": {
              obj.freq = constants.YEARLY;
              symbol = obj2.symbol;
              let num2 = 12;
              flag2 = 12;
              switch (symbol) {
                case "january": {
                  flag2 = 1;
                  items4 = [flag2];
                  obj.bymonth = items4;
                  nextSymbolResult15 = obj2.nextSymbol();
                  tmp4 = obj;
                  if (nextSymbolResult15) {
                    acceptResult13 = obj2.accept("comma");
                    let num3 = 1;
                    let num4 = 2;
                    let num5 = 3;
                    let num6 = 4;
                    let num7 = 5;
                    let num8 = 6;
                    if (acceptResult13) {
                      isDoneResult1 = obj2.isDone();
                      while (!isDoneResult1) {
                        symbol2 = obj2.symbol;
                        flag3 = 12;
                        switch (symbol2) {
                          case "january": {
                            flag3 = 1;
                            if (flag3) {
                              bymonth = obj.bymonth;
                              let arr4 = bymonth.push(flag3);
                              let nextSymbolResult16 = obj2.nextSymbol();
                              let acceptResult14 = obj2.accept("comma");
                            } else {
                              let tmp12 = globalThis;
                              let _Error = Error;
                              symbol3 = obj2.symbol;
                              let str3 = "Unexpected symbol ";
                              let text9 = `Unexpected symbol ${symbol3}`;
                              let self = this;
                              let str4 = ", expected month";
                              let text10 = `Unexpected symbol ${symbol3}, expected month`;
                              let self2 = this;
                              error16 = new Error(`Unexpected symbol ${symbol3}, expected month`);
                              let tmp16 = error16;
                              throw error16;
                            }
                            break;
                          }
                          case "february": {
                            flag3 = 2;
                            break;
                          }
                          case "march": {
                            flag3 = 3;
                            break;
                          }
                          case "april": {
                            flag3 = 4;
                            break;
                          }
                          case "may": {
                            flag3 = 5;
                            break;
                          }
                          case "june": {
                            flag3 = 6;
                            break;
                          }
                          case "july": {
                            flag3 = 7;
                            break;
                          }
                          case "august": {
                            flag3 = 8;
                            break;
                          }
                          case "september": {
                            flag3 = 9;
                            break;
                          }
                          case "october": {
                            flag3 = 10;
                            break;
                          }
                          case "november": {
                            flag3 = 11;
                            break;
                          }
                          case "december": {
                            break;
                          }
                          default: {
                            flag3 = false;
                            break;
                          }
                        }
                      }
                      let tmp33 = globalThis;
                      let _Error3 = Error;
                      let self7 = this;
                      let str9 = "Unexpected end";
                      let self8 = this;
                      error17 = new Error("Unexpected end");
                      throw error17;
                    }
                    fn();
                    let str5 = "until";
                    if ("until" === obj2.symbol) {
                      let _Date = Date;
                      parsed11 = Date.parse(obj2.text);
                      if (parsed11) {
                        let _Date2 = Date;
                        let self5 = this;
                        let self6 = this;
                        date8 = new Date(parsed11);
                        obj.until = date8;
                        tmp4 = obj;
                      } else {
                        let _Error2 = Error;
                        text = obj2.text;
                        let str8 = "Cannot parse until date:";
                        let text11 = `Cannot parse until date:${text}`;
                        let self3 = this;
                        let self4 = this;
                        error18 = new Error(`Cannot parse until date:${text}`);
                        throw error18;
                      }
                    } else {
                      let str6 = "for";
                      acceptResult15 = obj2.accept("for");
                      tmp4 = obj;
                      if (acceptResult15) {
                        let tmp22 = globalThis;
                        let _parseInt2 = parseInt;
                        parsed12 = parseInt(obj2.value[0], 10);
                        obj.count = parsed12;
                        let str7 = "number";
                        obj2.expect("number");
                        tmp4 = obj;
                      }
                    }
                  }
                  break;
                }
                case "february": {
                  flag2 = 2;
                  break;
                }
                case "march": {
                  flag2 = 3;
                  break;
                }
                case "april": {
                  flag2 = 4;
                  break;
                }
                case "may": {
                  flag2 = 5;
                  break;
                }
                case "june": {
                  flag2 = 6;
                  break;
                }
                case "july": {
                  flag2 = 7;
                  break;
                }
                case "august": {
                  flag2 = 8;
                  break;
                }
                case "september": {
                  flag2 = 9;
                  break;
                }
                case "october": {
                  flag2 = 10;
                  break;
                }
                case "november": {
                  flag2 = 11;
                  break;
                }
                case "december": {
                  break;
                }
                default: {
                  flag2 = false;
                  break;
                }
              }
              break;
            }
            default: {
              const _Error19 = Error;
              const self55 = this;
              const self56 = this;
              const error19 = new Error("Unknown symbol");
              throw error19;
            }
          }
        }
      }
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function rt(arg0) {
    const items = [];
    const keys = Object.keys(arg0);
    let num = 0;
    if (0 < keys.length) {
      while (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp7 = null != closure_71;
              let tmp8 = !tmp7;
              if (tmp7) {
                tmp8 = 0 === closure_71.length;
              }
              let tmp9 = !tmp8 && -1 !== closure_71.indexOf(tmp);
              if (!tmp9) {
                let arr = items.push(tmp);
              }
              if (typeof E === "function") {
                let _Date = Date;
                let tmp13 = tmp12 instanceof Date;
                if (tmp13) {
                  obj = arg0[tmp];
                  if (typeof T === "function") {
                    if (typeof tmp11 === "function") {
                      let _Date2 = Date;
                      let tmp15 = obj instanceof Date;
                      if (tmp15) {
                        let _isNaN = isNaN;
                        tmp15 = !isNaN(obj.getTime());
                      }
                      tmp13 = !tmp15;
                    } else {
                      let str9 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let str8 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                if (tmp13) {
                  let arr2 = items.push(tmp);
                }
                num = num + 1;
              } else {
                let str7 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str6 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str5 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str4 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    if (items.length) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Invalid options: " + items.join(", "));
      throw error;
    } else {
      return obj({}, arg0);
    }
  }
  function at(arg0) {
    obj = {};
    const obj2 = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i;
    const match = obj2.exec(arg0);
    if (match) {
      if (match[1]) {
        obj.tzid = match[1];
      }
      if (typeof A === "function") {
        const obj3 = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
        const match1 = obj3.exec(tmp3);
        if (match1) {
          const _Date2 = Date;
          const _parseInt = parseInt;
          const _Date = Date;
          const parsed = parseInt(match1[1], 10);
          const _parseInt2 = parseInt;
          const diff = parseInt(match1[2], 10) - 1;
          const _parseInt3 = parseInt;
          const parsed1 = parseInt(match1[3], 10);
          const _parseInt4 = parseInt;
          const _parseInt5 = parseInt;
          const tmp12 = parseInt(match1[5], 10) || 0;
          const _parseInt6 = parseInt;
          const tmp13 = parseInt(match1[6], 10) || 0;
          const self3 = this;
          const self4 = this;
          const tmp14 = parseInt(match1[7], 10) || 0;
          const _Date1 = new _Date(UTC(parsed, diff, parsed1, tmp12, tmp13, tmp14));
          obj.dtstart = _Date1;
          return obj;
        } else {
          const _Error = Error;
          const concat = "Invalid UNTIL value: ".concat;
          const self = this;
          const self2 = this;
          const error = new Error("Invalid UNTIL value: ".concat(tmp3));
          throw error;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      return obj;
    }
  }
  function st(str) {
    const f151889 = function (item) {
      let formatted;
      let index;
      let isMatch;
      let mapped;
      let mapped1;
      let obj2;
      let parts1;
      let parts2;
      let str;
      let str2;
      let tmp24;
      const f155409 = function (item) {
        if (2 === item.length) {
          return closure_1_69[item];
        } else {
          const match = item.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
          if (match) {
            if (match.length >= 3) {
              const _Number = Number;
              const NumberResult = Number(match[1]);
              const self = this;
              if (typeof closure_1_2 === "function") {
                obj = {};
                if (0 === NumberResult) {
                  const _Error = Error;
                  const self2 = this;
                  const self3 = this;
                  const error = new Error("Can't create weekday with n == 0");
                  throw error;
                } else {
                  obj.weekday = tmp4;
                  obj.n = NumberResult;
                  return obj;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          const _SyntaxError = SyntaxError;
          const concat = "Invalid weekday string: ".concat;
          const self4 = this;
          const self5 = this;
          const syntaxError = new SyntaxError("Invalid weekday string: ".concat(item));
          throw syntaxError;
        }
      };
      const parts = item.split("=");
      [str, str2] = parts;
      switch (str.toUpperCase()) {
        case "FREQ": {
          closure_1.freq = obj6[str2.toUpperCase(str2)];
          break;
        }
        case "WKST": {
          closure_1.wkst = obj49[str2.toUpperCase(str2)];
          break;
        }
        case "COUNT": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "INTERVAL": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYSETPOS": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYMONTH": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYMONTHDAY": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYYEARDAY": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYWEEKNO": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYHOUR": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYMINUTE": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYSECOND": {
          index = str2.indexOf(",");
          if (-1 !== index) {
            parts1 = str2.split(",");
            mapped = parts1.map(ht);
          } else {
            obj2 = /^[+-]?\d+$/;
            isMatch = obj2.test(str2);
            mapped = str2;
            if (isMatch) {
              let _Number2 = Number;
              mapped = Number(str2);
            }
          }
          formatted = str.toLowerCase();
          closure_1[formatted] = mapped;
          break;
        }
        case "BYWEEKDAY": {
          parts2 = str2.split(",");
          fn = f155409;
          mapped1 = parts2.map(fn);
          closure_1.byweekday = mapped1;
          break;
        }
        case "BYDAY": {
          parts2 = str2.split(",");
          fn = f155409;
          mapped1 = parts2.map(fn);
          closure_1.byweekday = mapped1;
          break;
        }
        case "DTSTART": {
          tmp24 = at(replaced);
          closure_1.tzid = tmp24.tzid;
          closure_1.dtstart = tmp24.dtstart;
          break;
        }
        case "TZID": {
          tmp24 = at(replaced);
          closure_1.tzid = tmp24.tzid;
          closure_1.dtstart = tmp24.dtstart;
          break;
        }
        case "UNTIL": {
          if (typeof closure_2_34 === "function") {
            obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
            let match = obj.exec(str2);
            if (match) {
              const _Date2 = Date;
              const _parseInt = parseInt;
              const _Date = Date;
              const parsed = parseInt(match[1], 10);
              const _parseInt2 = parseInt;
              const diff = parseInt(match[2], 10) - 1;
              const _parseInt3 = parseInt;
              const parsed1 = parseInt(match[3], 10);
              const _parseInt4 = parseInt;
              const _parseInt5 = parseInt;
              const num3 = parseInt(match[5], 10) || 0;
              const _parseInt6 = parseInt;
              const num4 = parseInt(match[6], 10) || 0;
              let self3 = this;
              let self4 = this;
              const num5 = parseInt(match[7], 10) || 0;
              const _Date1 = new _Date(UTC(parsed, diff, parsed1, num3, num4, num5));
              tmp4.until = _Date1;
            } else {
              let _Error = Error;
              let concat = "Invalid UNTIL value: ".concat;
              let self = this;
              let self2 = this;
              let error = new Error("Invalid UNTIL value: ".concat(str2));
              throw error;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          break;
        }
        case "BYEASTER": {
          let _Number = Number;
          closure_1.byeaster = Number(str2);
          break;
        }
        default: {
          const _Error2 = Error;
          let self5 = this;
          const self6 = this;
          const error1 = new Error("Unknown RRULE property '" + str + "'");
          throw error1;
        }
      }
    };
    const replaced = str.replace(/^\s+|\s+$/, "");
    if (replaced.length) {
      obj = /^([A-Z]+?)[:;]/;
      let match = obj.exec(replaced.toUpperCase());
      if (match) {
        const str3 = match[1];
        let formatted = str3.toUpperCase();
        if ("RRULE" !== formatted) {
          if ("EXRULE" !== formatted) {
            if ("DTSTART" === formatted) {
              return at(replaced);
            } else {
              const tmp7 = globalThis;
              let _Error = Error;
              let concat = "Unsupported RFC prop ".concat;
              combined = "Unsupported RFC prop ".concat(str3, " in ");
              let self = this;
              let self2 = this;
              let error = new Error(combined.concat(replaced));
              throw error;
            }
          }
        }
        let num3 = 0;
        const tmp12 = at(replaced.replace(/^RRULE:/i, ""));
        let closure_1 = tmp12;
        const str9 = replaced.replace(/^(?:RRULE|EXRULE):/i, "");
        let parts = str9.split(";");
        const item = parts.forEach(f151889);
        return tmp12;
      } else {
        const tmp4 = at(replaced.replace(/^RRULE:/i, ""));
        closure_1 = tmp4;
        str = replaced.replace(/^(?:RRULE|EXRULE):/i, "");
        const str2 = ";";
        let parts1 = str.split(";");
        const item1 = parts1.forEach(f151889);
        return tmp4;
      }
    } else {
      return null;
    }
  }
  function ht(arg0) {
    let NumberResult = arg0;
    obj = /^[+-]?\d+$/;
    if (obj.test(arg0)) {
      const _Number = Number;
      NumberResult = Number(arg0);
    }
    return NumberResult;
  }
  function ct(tzid) {
    const items = [];
    const keys = Object.keys(tzid);
    const keys1 = Object.keys(obj57);
    let str = "";
    let num = 0;
    let str2 = "";
    let str3 = "";
    if (0 < keys.length) {
      while (true) {
        let tmp2 = str2;
        let tmp3 = str2;
        if ("tzid" !== keys[num]) {
          if (typeof p === "function") {
            if (typeof f !== "function") {
              break;
            } else if (typeof l === "function") {
              if (typeof i === "function") {
                let tmp7 = null != keys1;
                let tmp8 = !tmp7;
                if (tmp7) {
                  tmp8 = 0 === keys1.length;
                }
                let tmp9 = !tmp8 && -1 !== keys1.indexOf(tmp32);
                tmp3 = str2;
                if (tmp9) {
                  let str4 = keys[num];
                  let formatted = str4.toUpperCase();
                  let str5 = tzid[keys[num]];
                  if (typeof tmp6 === "function") {
                    tmp3 = str2;
                    if (null != str5) {
                      if (!isArray(str5)) {
                        let str21;
                        let str6;
                        let tmp12;
                        if ("FREQ" === formatted) {
                          str21 = constants.FREQUENCIES[tzid.freq];
                          str6 = formatted;
                          tmp12 = str2;
                        } else if ("WKST" === formatted) {
                          if (typeof o === "function") {
                            let str1;
                            if (typeof str5 === "number") {
                              let self8 = this;
                              if (typeof t === "function") {
                                obj = { weekday: str5, n: undefined };
                                str1 = obj.toString();
                              } else {
                                let str20 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              str1 = str5.toString();
                            }
                            str21 = str1;
                            str6 = formatted;
                            tmp12 = str2;
                          } else {
                            let str19 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else if ("BYWEEKDAY" === formatted) {
                          let arr6 = str5;
                          if (!isArray(str5)) {
                            let items1 = [str5];
                            arr6 = items1;
                          }
                          let str10 = arr6.map(function (weekday) {
                            let tmp2 = weekday;
                            if (!(weekday instanceof closure_1_2)) {
                              if (isArray(weekday)) {
                                const self2 = this;
                                if (typeof closure_1_2 === "function") {
                                  const obj2 = {};
                                  if (0 === weekday[1]) {
                                    const _Error = Error;
                                    const self3 = this;
                                    const self4 = this;
                                    const error = new Error("Can't create weekday with n == 0");
                                    throw error;
                                  } else {
                                    obj2.weekday = tmp4;
                                    obj2.n = weekday[1];
                                    obj = obj2;
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                const self = this;
                                if (typeof closure_1_2 === "function") {
                                  obj = { weekday, n: undefined };
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              tmp2 = obj;
                            }
                            return tmp2;
                          });
                          str21 = str10.toString();
                          str6 = "BYDAY";
                          tmp12 = str2;
                        } else if ("DTSTART" === formatted) {
                          let text = str;
                          if (str5) {
                            let _Date2 = Date;
                            let self3 = this;
                            let self4 = this;
                            date = new Date(str5);
                            let self5 = this;
                            if (typeof rangeError === "function") {
                              let obj2 = {};
                              let _isNaN = isNaN;
                              if (isNaN(date.getTime())) {
                                let _RangeError = RangeError;
                                let self6 = this;
                                let str9 = "Invalid date passed to DateWithZone";
                                let self7 = this;
                                rangeError = new RangeError("Invalid date passed to DateWithZone");
                                throw rangeError;
                              } else {
                                obj2.date = date;
                                obj2.tzid = tmp18;
                                text = `DTSTART${obj3.toString()}`;
                              }
                            } else {
                              let str18 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          tmp12 = text;
                          str21 = str;
                          str6 = formatted;
                        } else if ("UNTIL" === formatted) {
                          tzid = tzid.tzid;
                          let tmp14 = !tzid;
                          if (typeof N === "function") {
                            let _Date = Date;
                            let self = this;
                            let self2 = this;
                            let date1 = new Date(str5);
                            let str7 = date1.getUTCFullYear();
                            let items2 = [
                              y(str7.toString(), 4, "0"),
                              y(date1.getUTCMonth() + 1, 2, "0"),
                              y(date1.getUTCDate(), 2, "0"),
                              "T",
                              y(date1.getUTCHours(), 2, "0"),
                              y(date1.getUTCMinutes(), 2, "0"),
                              y(date1.getUTCSeconds(), 2, "0"),
                            ];
                            let str8 = str;
                            if (!tzid) {
                              str8 = "Z";
                            }
                            items2[7] = str8;
                            str21 = items2.join(str);
                            str6 = formatted;
                            tmp12 = str2;
                          } else {
                            let str17 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else if (isArray(str5)) {
                          let items3 = [];
                          let num2 = 0;
                          if (0 < str5.length) {
                            do {
                              let _String2 = String;
                              items3[num2] = String(str5[num2]);
                              num2 = num2 + 1;
                              length = str5.length;
                            } while (num2 < length);
                          }
                          str21 = items3.toString();
                          str6 = formatted;
                          tmp12 = str2;
                        } else {
                          let _String = String;
                          str21 = String(str5);
                          str6 = formatted;
                          tmp12 = str2;
                        }
                        tmp3 = tmp12;
                        if (str21) {
                          let items4 = [str6, str21];
                          let arr = items.push(items4);
                          tmp3 = tmp12;
                        }
                      } else {
                        tmp3 = str2;
                      }
                    }
                  } else {
                    let str16 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              } else {
                let str15 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str14 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str12 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        num = num + 1;
        str2 = tmp3;
        str3 = tmp3;
      }
      throw new TypeError("Trying to call a non-function");
    }
    const mapped = items.map((item) => {
      const str = item[1];
      combined = "".concat(item[0], "=");
      return combined.concat(str.toString());
    });
    const joined = mapped.join(";");
    if (str !== joined) {
      const concat = "RRULE:".concat;
      str = "RRULE:".concat(joined);
    }
    const items5 = [str3, str];
    const found = items5.filter((item) => item);
    return found.join("\n");
  }
  function At(accept, interval) {
    let byhour;
    let byminute;
    let bymonth;
    let bymonthday;
    let bynmonthday;
    let bysecond;
    let bysetpos;
    let byweekday;
    let byweekno;
    let byyearday;
    let count;
    let dtstart;
    let freq;
    let freq2;
    let tmp37;
    let tmp38;
    let tmp39;
    let until;
    ({ dtstart, freq, until, bysetpos, count } = interval);
    if (0 !== count) {
      if (0 !== interval.interval) {
        date = closure_50.fromDate(dtstart);
        const self13 = this;
        if (typeof closure_67 === "function") {
          let items2;
          self13.options = interval;
          self13.rebuild(date.year, date.month);
          ({ freq: freq2, byhour, byminute, bysecond } = interval);
          if (freq2 < obj6.HOURLY) {
            let items1;
            const dtstart2 = interval.dtstart;
            let closure_1 = dtstart2.getTime() % 1000;
            if (interval.freq < tmp2.HOURLY) {
              const items = [];
              const byhour1 = interval.byhour;
              let item = byhour1.forEach((item) => {
                interval = item;
                const byminute = interval.byminute;
                item = byminute.forEach((item) => {
                  const bysecond = item.bysecond;
                  item = bysecond.forEach((item) => {
                    let num = closure_1;
                    if (typeof closure_49 === "function") {
                      obj = { hour: tmp3, minute: tmp4, second: item, millisecond: num };
                      if (!num) {
                        num = 0;
                      }
                      tmp2(obj);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                });
              });
              items1 = items;
            } else {
              items1 = [];
            }
            items2 = items1;
          } else {
            if (freq2 >= constants.HOURLY) {
              if (typeof f === "function") {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp7 = !tmp6;
                    if (null != byhour) {
                      tmp7 = 0 === byhour.length;
                    }
                    if (!tmp7) {
                      if (typeof p === "function") {
                        if (typeof tmp197 === "function") {
                          if (typeof tmp3 === "function") {
                            if (typeof tmp4 === "function") {
                              let tmp11 = !tmp10;
                              if (null != byhour) {
                                tmp11 = 0 === byhour.length;
                              }
                              let tmp12 = !tmp11;
                              if (tmp12) {
                                let num = -1;
                                tmp12 = -1 !== byhour.indexOf(tmp9);
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    items2 = [];
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (freq2 >= constants.MINUTELY) {
              if (typeof f === "function") {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp17 = !tmp16;
                    if (null != byminute) {
                      tmp17 = 0 === byminute.length;
                    }
                    if (!tmp17) {
                      if (typeof p === "function") {
                        if (typeof tmp198 === "function") {
                          if (typeof tmp13 === "function") {
                            if (typeof tmp14 === "function") {
                              let tmp21 = !tmp20;
                              if (null != byminute) {
                                tmp21 = 0 === byminute.length;
                              }
                              !tmp21 && -1 !== byminute.indexOf(tmp19);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (freq2 >= constants.SECONDLY) {
              if (typeof f === "function") {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp27 = !tmp26;
                    if (null != bysecond) {
                      tmp27 = 0 === bysecond.length;
                    }
                    if (!tmp27) {
                      if (typeof p === "function") {
                        if (typeof tmp199 === "function") {
                          if (typeof tmp23 === "function") {
                            if (typeof tmp24 === "function") {
                              let tmp31 = !tmp30;
                              if (null != bysecond) {
                                tmp31 = 0 === bysecond.length;
                              }
                              !tmp31 && -1 !== bysecond.indexOf(tmp29);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            items2 = self13.gettimeset(freq2)(date.hour, date.minute, date.second, date.millisecond);
          }
          while (true) {
            let tmp36 = self13.getdayset(freq)(date.year, date.month, date.day);
            [tmp37, tmp38, tmp39] = tmp36;
            let arr5 = items2;
            let sum = tmp38;
            let flag = false;
            if (tmp38 < tmp39) {
              let tmp42 = tmp37[sum];
              ({ bymonth, byweekno, byweekday, bymonthday, bynmonthday, byyearday } = interval);
              while (typeof f === "function") {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp48 = null != bymonth;
                    let tmp49 = !tmp48;
                    if (tmp48) {
                      tmp49 = 0 === bymonth.length;
                    }
                    let tmp50 = !tmp49;
                    if (tmp50) {
                      if (typeof p === "function") {
                        if (typeof f === "function") {
                          if (typeof l === "function") {
                            if (typeof i === "function") {
                              let tmp53 = null != bymonth;
                              let tmp54 = !tmp53;
                              if (tmp53) {
                                tmp54 = 0 === bymonth.length;
                              }
                              let tmp55 = !tmp54 && -1 !== bymonth.indexOf(tmp52);
                              tmp50 = !tmp55;
                            } else {
                              let str31 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            let str30 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str29 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str28 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (!tmp50) {
                      if (typeof f === "function") {
                        if (typeof l === "function") {
                          if (typeof i === "function") {
                            let tmp56 = null != byweekno;
                            let tmp57 = !tmp56;
                            if (tmp56) {
                              tmp57 = 0 === byweekno.length;
                            }
                            let tmp58 = !tmp57 && !self13.wnomask[tmp42];
                            tmp50 = tmp58;
                          } else {
                            let str34 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str33 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str32 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (!tmp50) {
                      if (typeof f === "function") {
                        if (typeof l === "function") {
                          if (typeof i === "function") {
                            let tmp59 = null != byweekday;
                            let tmp60 = !tmp59;
                            if (tmp59) {
                              tmp60 = 0 === byweekday.length;
                            }
                            let tmp61 = !tmp60;
                            if (tmp61) {
                              if (typeof p === "function") {
                                if (typeof f === "function") {
                                  if (typeof l === "function") {
                                    if (typeof i === "function") {
                                      let tmp64 = null != byweekday;
                                      let tmp65 = !tmp64;
                                      if (tmp64) {
                                        tmp65 = 0 === byweekday.length;
                                      }
                                      let tmp66 = !tmp65 && -1 !== byweekday.indexOf(tmp63);
                                      tmp61 = !tmp66;
                                    } else {
                                      let str41 = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    let str40 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str39 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                let str38 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                            tmp50 = tmp61;
                          } else {
                            let str37 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str36 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str35 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (!tmp50) {
                      let nwdaymask = self13.nwdaymask;
                      if (typeof f === "function") {
                        if (typeof l === "function") {
                          if (typeof i === "function") {
                            let tmp67 = null != nwdaymask;
                            let tmp68 = !tmp67;
                            if (tmp67) {
                              tmp68 = 0 === nwdaymask.length;
                            }
                            let tmp69 = !tmp68 && !self13.nwdaymask[tmp42];
                            tmp50 = tmp69;
                          } else {
                            let str44 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str43 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str42 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (!tmp50) {
                      let tmp70 = null !== tmp43;
                      if (tmp70) {
                        let eastermask = self13.eastermask;
                        if (typeof p === "function") {
                          if (typeof f === "function") {
                            if (typeof l === "function") {
                              if (typeof i === "function") {
                                let tmp72 = null != eastermask;
                                let tmp73 = !tmp72;
                                if (tmp72) {
                                  tmp73 = 0 === eastermask.length;
                                }
                                let tmp74 = !tmp73 && -1 !== eastermask.indexOf(tmp42);
                                tmp70 = !tmp74;
                              } else {
                                let str48 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              let str47 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            let str46 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str45 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      tmp50 = tmp70;
                    }
                    if (!tmp50) {
                      if (typeof f === "function") {
                        if (typeof l === "function") {
                          if (typeof i === "function") {
                            let tmp75 = null != bymonthday;
                            let tmp76 = !tmp75;
                            if (tmp75) {
                              tmp76 = 0 === bymonthday.length;
                            }
                            let tmp77 = !tmp76;
                            if (!tmp77) {
                              if (typeof f === "function") {
                                if (typeof l === "function") {
                                  if (typeof i === "function") {
                                    let tmp78 = null != bynmonthday;
                                    let tmp79 = !tmp78;
                                    if (tmp78) {
                                      tmp79 = 0 === bynmonthday.length;
                                    }
                                    tmp77 = !tmp79;
                                  } else {
                                    let str54 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str53 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                let str52 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                            if (tmp77) {
                              if (typeof p === "function") {
                                if (typeof f === "function") {
                                  if (typeof l === "function") {
                                    if (typeof i === "function") {
                                      let tmp82 = null != bymonthday;
                                      let tmp83 = !tmp82;
                                      if (tmp82) {
                                        tmp83 = 0 === bymonthday.length;
                                      }
                                      let tmp84 = !tmp83 && -1 !== bymonthday.indexOf(tmp81);
                                      tmp77 = !tmp84;
                                    } else {
                                      let str58 = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    let str57 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str56 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                let str55 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                            if (tmp77) {
                              if (typeof p === "function") {
                                if (typeof f === "function") {
                                  if (typeof l === "function") {
                                    if (typeof i === "function") {
                                      let tmp87 = null != bynmonthday;
                                      let tmp88 = !tmp87;
                                      if (tmp87) {
                                        tmp88 = 0 === bynmonthday.length;
                                      }
                                      let tmp89 = !tmp88 && -1 !== bynmonthday.indexOf(tmp86);
                                      tmp77 = !tmp89;
                                    } else {
                                      let str62 = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    let str61 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str60 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                let str59 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                            tmp50 = tmp77;
                          } else {
                            let str51 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str50 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str49 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (!tmp50) {
                      if (typeof f === "function") {
                        if (typeof l === "function") {
                          if (typeof i === "function") {
                            let tmp90 = null != byyearday;
                            let tmp91 = !tmp90;
                            if (tmp90) {
                              tmp91 = 0 === byyearday.length;
                            }
                            let tmp92 = !tmp91;
                            if (tmp92) {
                              let tmp93 = tmp42 < self13.yearlen;
                              if (tmp93) {
                                if (typeof p === "function") {
                                  if (typeof f === "function") {
                                    if (typeof l === "function") {
                                      if (typeof i === "function") {
                                        let tmp96 = null != byyearday;
                                        let tmp97 = !tmp96;
                                        if (tmp96) {
                                          tmp97 = 0 === byyearday.length;
                                        }
                                        let tmp98 = !tmp97 && -1 !== byyearday.indexOf(tmp95);
                                        tmp93 = !tmp98;
                                      } else {
                                        let str69 = "Trying to call a non-function";
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      let str68 = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    let str67 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str66 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              if (tmp93) {
                                if (typeof p === "function") {
                                  if (typeof f === "function") {
                                    if (typeof l === "function") {
                                      if (typeof i === "function") {
                                        let tmp101 = null != byyearday;
                                        let tmp102 = !tmp101;
                                        if (tmp101) {
                                          tmp102 = 0 === byyearday.length;
                                        }
                                        let tmp103 = !tmp102 && -1 !== byyearday.indexOf(tmp100);
                                        tmp93 = !tmp103;
                                      } else {
                                        let str73 = "Trying to call a non-function";
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      let str72 = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    let str71 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str70 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              if (!tmp93) {
                                let tmp104 = tmp42 >= self13.yearlen;
                                if (tmp104) {
                                  if (typeof p === "function") {
                                    if (typeof f === "function") {
                                      if (typeof l === "function") {
                                        if (typeof i === "function") {
                                          let tmp107 = null != byyearday;
                                          let tmp108 = !tmp107;
                                          if (tmp107) {
                                            tmp108 = 0 === byyearday.length;
                                          }
                                          let tmp109 = !tmp108 && -1 !== byyearday.indexOf(tmp106);
                                          tmp104 = !tmp109;
                                        } else {
                                          let str77 = "Trying to call a non-function";
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        let str76 = "Trying to call a non-function";
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      let str75 = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    let str74 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                if (tmp104) {
                                  if (typeof p === "function") {
                                    if (typeof f === "function") {
                                      if (typeof l === "function") {
                                        if (typeof i === "function") {
                                          let tmp112 = null != byyearday;
                                          let tmp113 = !tmp112;
                                          if (tmp112) {
                                            tmp113 = 0 === byyearday.length;
                                          }
                                          let tmp114 = !tmp113 && -1 !== byyearday.indexOf(tmp111);
                                          tmp104 = !tmp114;
                                        } else {
                                          let str81 = "Trying to call a non-function";
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        let str80 = "Trying to call a non-function";
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      let str79 = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    let str78 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                tmp93 = tmp104;
                              }
                              tmp92 = tmp93;
                            }
                            tmp50 = tmp92;
                          } else {
                            let str65 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str64 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str63 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (tmp50) {
                      tmp37[tmp42] = null;
                    }
                    sum = sum + 1;
                    flag = tmp50;
                    continue;
                  } else {
                    let str27 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str26 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              let str25 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
            if (typeof f === "function") {
              if (typeof l === "function") {
                if (typeof i === "function") {
                  let tmp122;
                  let tmp118 = null != bysetpos;
                  let tmp119 = !tmp118;
                  if (tmp118) {
                    tmp119 = 0 === bysetpos.length;
                  }
                  if (!tmp119) {
                    let items3 = [];
                    let num9 = 0;
                    if (0 < bysetpos.length) {
                      while (true) {
                        let sum2;
                        let tmp152;
                        let tmp145 = bysetpos[num9];
                        if (tmp145 < 0) {
                          let _Math2 = Math;
                          length2 = arr5.length;
                          if (typeof c === "function") {
                            let result = tmp145 % length2;
                            let sum1 = result;
                            if (result * length2 < 0) {
                              sum1 = result + length2;
                            }
                            sum2 = sum1;
                            tmp152 = tmp153;
                          } else {
                            let str90 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let _Math = Math;
                          length = arr5.length;
                          if (typeof c !== "function") {
                            break;
                          } else {
                            let result1 = tmp149 % length;
                            sum2 = result1;
                            if (result1 * length < 0) {
                              sum2 = result1 + length;
                            }
                            tmp152 = tmp147;
                          }
                        }
                        let items4 = [];
                        let sum3 = tmp38;
                        if (tmp38 < tmp39) {
                          let tmp158 = tmp37[sum3];
                          while (typeof i === "function") {
                            if (null != tmp158) {
                              let arr = items4.push(tmp158);
                            }
                            sum3 = sum3 + 1;
                            continue;
                          }
                          let str91 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                        if (tmp152 < 0) {
                          let first = items4.slice(tmp152)[0];
                        } else {
                          first = items4[tmp152];
                        }
                        obj5 = arr5[sum2];
                        if (typeof D === "function") {
                          let _Date5 = Date;
                          let self7 = this;
                          let self8 = this;
                          let date1 = new Date(date.getTime() + tmp164 * c17);
                          if (typeof L === "function") {
                            if (!obj5) {
                              obj5 = date1;
                            }
                            let _Date6 = Date;
                            let _Date7 = Date;
                            let UTC2 = Date.UTC;
                            let uTCFullYear = date1.getUTCFullYear();
                            let uTCMonth = date1.getUTCMonth();
                            let uTCDate = date1.getUTCDate();
                            let hours = obj5.getHours();
                            let minutes = obj5.getMinutes();
                            let seconds = obj5.getSeconds();
                            let _Date8 = Date;
                            let self9 = this;
                            let self10 = this;
                            let date2 = new Date(
                              UTC2(uTCFullYear, uTCMonth, uTCDate, hours, minutes, seconds, obj5.getMilliseconds()),
                            );
                            if (typeof p === "function") {
                              if (typeof f === "function") {
                                if (typeof l === "function") {
                                  if (typeof i === "function") {
                                    let tmp181 = 0 !== items3.length && -1 !== items3.indexOf(date2);
                                    if (!tmp181) {
                                      let arr2 = items3.push(date2);
                                    }
                                    num9 = num9 + 1;
                                    continue;
                                  } else {
                                    let str97 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str96 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                let str95 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              let str94 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            let str93 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str92 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      let str89 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                    if (typeof R === "function") {
                      let sorted = items3.sort(f151903);
                      let num10 = 0;
                      let tmp185 = count;
                      tmp122 = count;
                      if (0 < items3.length) {
                        while (true) {
                          let obj7 = items3[num10];
                          if (until) {
                            if (obj7 > until) {
                              break;
                            }
                          }
                          let diff = tmp185;
                          if (obj7 >= dtstart) {
                            let self15 = this;
                            if (typeof rangeError === "function") {
                              obj = {};
                              let _isNaN2 = isNaN;
                              if (isNaN(obj7.getTime())) {
                                let _RangeError2 = RangeError;
                                let self11 = this;
                                let str2 = "Invalid date passed to DateWithZone";
                                let self12 = this;
                                rangeError = new RangeError("Invalid date passed to DateWithZone");
                                throw rangeError;
                              } else {
                                obj.date = obj7;
                                obj.tzid = tmp205;
                                if (accept.accept(obj.rezonedDate())) {
                                  diff = tmp185;
                                  if (diff) {
                                    diff = tmp185 - 1;
                                    if (!diff) {
                                      return accept.getValue();
                                    }
                                  }
                                } else {
                                  return accept.getValue();
                                }
                              }
                            } else {
                              let str99 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          num10 = num10 + 1;
                          tmp185 = diff;
                          tmp122 = diff;
                          continue;
                        }
                        return accept.getValue();
                      }
                    } else {
                      let str98 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let sum4 = tmp38;
                    let tmp121 = count;
                    tmp122 = count;
                    if (tmp38 < tmp39) {
                      let tmp123 = tmp37[sum4];
                      while (typeof i === "function") {
                        let tmp127 = tmp121;
                        if (null != tmp123) {
                          if (typeof D === "function") {
                            let _Date = Date;
                            let self = this;
                            let self2 = this;
                            let date3 = new Date(date.getTime() + tmp201 * c17);
                            let num8 = 0;
                            let tmp131 = tmp121;
                            tmp127 = tmp121;
                            if (0 < arr5.length) {
                              let obj2 = arr5[num8];
                              while (typeof L === "function") {
                                if (!obj2) {
                                  obj2 = date3;
                                }
                                let _Date2 = Date;
                                let _Date3 = Date;
                                let uTCFullYear1 = date3.getUTCFullYear();
                                let uTCMonth1 = date3.getUTCMonth();
                                let uTCDate1 = date3.getUTCDate();
                                let hours1 = obj2.getHours();
                                let minutes1 = obj2.getMinutes();
                                let seconds1 = obj2.getSeconds();
                                let _Date4 = Date;
                                let self3 = this;
                                let self4 = this;
                                let date4 = new Date(
                                  UTC(
                                    uTCFullYear1,
                                    uTCMonth1,
                                    uTCDate1,
                                    hours1,
                                    minutes1,
                                    seconds1,
                                    obj2.getMilliseconds(),
                                  ),
                                );
                                if (until) {
                                  if (date4 > until) {
                                    return accept.getValue();
                                  }
                                }
                                let diff1 = tmp131;
                                if (date4 >= dtstart) {
                                  let self14 = this;
                                  if (typeof rangeError === "function") {
                                    let obj3 = {};
                                    let _isNaN = isNaN;
                                    if (isNaN(date4.getTime())) {
                                      let _RangeError = RangeError;
                                      let self5 = this;
                                      let str = "Invalid date passed to DateWithZone";
                                      let self6 = this;
                                      let rangeError1 = new RangeError("Invalid date passed to DateWithZone");
                                      throw rangeError1;
                                    } else {
                                      obj3.date = date4;
                                      obj3.tzid = tmp203;
                                      if (accept.accept(obj3.rezonedDate())) {
                                        diff1 = tmp131;
                                        if (diff1) {
                                          diff1 = tmp131 - 1;
                                          if (!diff1) {
                                            return accept.getValue();
                                          }
                                        }
                                      } else {
                                        return accept.getValue();
                                      }
                                    }
                                  } else {
                                    let str88 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                num8 = num8 + 1;
                                tmp131 = diff1;
                                tmp127 = diff1;
                                continue;
                              }
                              let str87 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            let str86 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        sum4 = sum4 + 1;
                        tmp121 = tmp127;
                        tmp122 = tmp127;
                        continue;
                      }
                      let str85 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  if (0 === interval.interval) {
                    return accept.getValue();
                  } else {
                    let addResult = date.add(interval, flag);
                    if (date.year > 9999) {
                      return accept.getValue();
                    } else {
                      if (freq >= obj6.HOURLY) {
                        arr5 = self13.gettimeset(freq)(date.hour, date.minute, date.second, 0);
                      }
                      let rebuildResult1 = self13.rebuild(date.year, date.month);
                      items2 = arr5;
                      count = tmp122;
                      continue;
                    }
                  }
                } else {
                  let str84 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str83 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str82 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    return accept.getValue();
  }
  function Bt(str, arg1) {
    let closure_1;
    let closure_4;
    let dtstart;
    let sum;
    obj = arg1;
    if (undefined === arg1) {
      obj = {};
    }
    let items = [];
    const keys = Object.keys(obj);
    length = Object.keys(closure_73);
    let item = keys.forEach((item) => {
      if (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp6 = !tmp5;
              if (null != closure_1) {
                tmp6 = 0 === closure_1.length;
              }
              const tmp8 = !tmp6 && -1 !== closure_1.indexOf(item);
              if (!tmp8) {
                items.push(item);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
    if (items.length) {
      let _Error2 = Error;
      let self6 = this;
      let self7 = this;
      let error = new Error("Invalid options: " + items.join(", "));
      throw error;
    } else {
      const tmp5 = obj(obj({}, closure_73), obj);
      dtstart = undefined;
      let closure_2;
      let obj3;
      closure_4 = undefined;
      const items1 = [];
      length = [];
      const items2 = [];
      length2 = [];
      ({ dtstart, tzid: closure_4 } = at(str));
      let flag = tmp5.unfold;
      const tmp7 = at(str);
      if (undefined === flag) {
        flag = false;
      }
      str = str && str.trim();
      if (str) {
        let parts1;
        let self3;
        const split = str.split;
        if (flag) {
          let parts = split("\n");
          let str4 = " ";
          let str5 = "";
          let num3 = 0;
          parts1 = parts;
          if (0 < parts.length) {
            do {
              let str6 = parts[num3];
              let replaced = str6.replace(/\s+$/g, "");
              parts[num3] = replaced;
              let tmp10 = num3;
              if (replaced) {
                if (0 < num3) {
                  if (" " === replaced[0]) {
                    let diff = num3 - 1;
                    parts[diff] = parts[diff] + replaced.slice(1);
                    let spliceResult = parts.splice(num3, 1);
                    sum = num3;
                  }
                }
                sum = num3 + 1;
              } else {
                let spliceResult1 = parts.splice(num3, 1);
                sum = num3;
              }
              num3 = sum;
              parts1 = parts;
            } while (sum < parts.length);
          }
        } else {
          parts1 = split(/\s/);
        }
        let item1 = parts1.forEach(function (value) {
          let name;
          const f151894 = function (item) {
            if (typeof closure_1_34 === "function") {
              obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
              const match = obj.exec(item);
              if (match) {
                const _Date2 = Date;
                const _parseInt = parseInt;
                const _Date = Date;
                const parsed = parseInt(match[1], 10);
                const _parseInt2 = parseInt;
                const diff = parseInt(match[2], 10) - 1;
                const _parseInt3 = parseInt;
                const parsed1 = parseInt(match[3], 10);
                const _parseInt4 = parseInt;
                const _parseInt5 = parseInt;
                const tmp9 = parseInt(match[5], 10) || 0;
                const _parseInt6 = parseInt;
                const tmp10 = parseInt(match[6], 10) || 0;
                const self3 = this;
                const self4 = this;
                const tmp11 = parseInt(match[7], 10) || 0;
                const _Date1 = new _Date(UTC(parsed, diff, parsed1, tmp9, tmp10, tmp11));
                return _Date1;
              } else {
                const _Error = Error;
                concat = "Invalid UNTIL value: ".concat;
                const self = this;
                const self2 = this;
                const error = new Error("Invalid UNTIL value: ".concat(item));
                throw error;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          };
          const f154663 = function (item) {
            obj = /(VALUE=DATE(-TIME)?)|(TZID=)/;
            if (!obj.test(item)) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("unsupported RDATE/EXDATE parm: " + item);
              throw error;
            }
          };
          const tmp = value;
          if (tmp) {
            let obj3;
            if (-1 === value.indexOf(":")) {
              obj = { name: "RRULE", value };
              obj3 = obj;
            } else {
              const parts = value.split(":");
              const substr = parts.slice(0, 1);
              concat = substr.concat;
              const substr1 = parts.slice(1);
              items = [substr1.join(":")];
              combined = concat(items);
              obj3 = { name: null, value: null };
              [obj2.name, obj2.value] = combined;
            }
            ({ name, value } = obj3);
            const parts1 = name.split(";");
            if (parts1) {
              const str4 = parts1[0];
              const str5 = str4.toUpperCase();
              const substr2 = parts1.slice(1);
              const formatted = str5.toUpperCase();
              if ("RRULE" === formatted) {
                if (substr2.length) {
                  const _Error3 = Error;
                  const concat5 = "unsupported RRULE parm: ".concat;
                  const self5 = this;
                  const self6 = this;
                  let error = new Error("unsupported RRULE parm: ".concat(substr2.join(",")));
                  throw error;
                } else {
                  const push2 = items1.push;
                  const parts2 = value.split("\n");
                  const mapped = parts2.map(st);
                  const found = mapped.filter((item) => null !== item);
                  push2(closure_2_38(closure_2_38({}, found[0]), found[1]));
                }
              } else if ("RDATE" === formatted) {
                const obj4 = /RDATE(?:;TZID=([^:=]+))?/i;
                let match = obj4.exec(value);
                if (null === match) {
                  match = [];
                }
                const tmp20 = tmp19 && !closure_4;
                if (tmp20) {
                  closure_4 = tmp19;
                }
                const concat4 = concat.concat;
                const item = substr2.forEach(f154663);
                const parts3 = value.split(",");
                concat = concat4(parts3.map(f151894));
              } else if ("EXRULE" === formatted) {
                if (substr2.length) {
                  const _Error2 = Error;
                  const concat3 = "unsupported EXRULE parm: ".concat;
                  let self3 = this;
                  let self4 = this;
                  const error1 = new Error("unsupported EXRULE parm: ".concat(substr2.join(",")));
                  throw error1;
                } else {
                  const push = items2.push;
                  const parts4 = value.split("\n");
                  const mapped1 = parts4.map(st);
                  const found1 = mapped1.filter((item) => null !== item);
                  push(closure_2_38(closure_2_38({}, found1[0]), found1[1]));
                }
              } else if ("EXDATE" === formatted) {
                concat2 = concat2.concat;
                const item1 = substr2.forEach(f154663);
                const parts5 = value.split(",");
                concat2 = concat2(parts5.map(f151894));
              } else if ("DTSTART" !== formatted) {
                const _Error4 = Error;
                const self7 = this;
                const self8 = this;
                const error2 = new Error("unsupported property: " + str5);
                throw error2;
              }
            } else {
              let _Error = Error;
              let self = this;
              let self2 = this;
              const error3 = new Error("empty property name");
              throw error3;
            }
          }
        });
        length = closure_4;
        const tmp17 = false === tmp5.cache;
        closure_2 = tmp17;
        if (tmp5.compatible) {
          tmp5.forceset = true;
          tmp5.unfold = true;
        }
        if (!tmp5.forceset) {
          if (items1.length <= 1) {
            if (!length.length) {
              if (!items2.length) {
                if (!length2.length) {
                  const tmp18 = items1[0] || {};
                  const dtstart2 = tmp18.dtstart || tmp5.dtstart || dtstart;
                  let tmp20 = tmp18.tzid || tmp5.tzid || tmp16;
                  const obj2 = { dtstart: dtstart2, tzid: tmp20 };
                  self3 = this;
                  let self4 = this;
                  new closure_72(obj(obj({}, tmp18), obj2), tmp17);
                }
                return self3;
              }
            }
          }
        }
        let self5 = this;
        if (typeof closure_76 === "function") {
          obj3 = closure_200_0.call(self5, {}, tmp17) || self5;
          obj3.dtstart = Gt.apply(obj3, ["dtstart"]);
          obj3.tzid = Gt.apply(obj3, ["tzid"]);
          obj3._rrule = [];
          obj3._rdate = [];
          obj3._exrule = [];
          obj3._exdate = [];
          obj3.dtstart(dtstart);
          const tzid = obj3.tzid;
          tzid(closure_4);
          const item2 = items1.forEach(function (item) {
            const rrule = obj3.rrule;
            obj = { dtstart, tzid };
            new constants(closure_2_38(closure_2_38({}, item), obj), closure_2);
            rrule(this);
          });
          const item3 = arr8.forEach((item) => {
            obj3.rdate(item);
          });
          const item4 = items2.forEach(function (item) {
            const exrule = obj3.exrule;
            obj = { dtstart, tzid };
            new constants(closure_2_38(closure_2_38({}, item), obj), closure_2);
            exrule(this);
          });
          const item5 = arr9.forEach((item) => {
            obj3.exdate(item);
          });
          self3 = obj3;
          const tmp33 = tmp5.compatible && tmp5.dtstart;
          if (tmp33) {
            obj3.rdate(dtstart);
            self3 = obj3;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        let _Error = Error;
        let self = this;
        const str2 = "Invalid empty string";
        let self2 = this;
        let error1 = new Error("Invalid empty string");
        let tmp9 = error1;
        throw error1;
      }
    }
  }
  function Gt(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (arg0) => {
      if (undefined !== arg0) {
        const concat = "_".concat;
        self["_".concat(closure_0)] = arg0;
      }
      if (undefined !== self["_".concat("_", closure_0)]) {
        const concat2 = "_".concat;
        return self["_".concat("_", closure_0)];
      } else {
        let num = 0;
        if (0 < self._rrule.length) {
          while (!self._rrule[num].origOptions[closure_0]) {
            num = num + 1;
          }
          return self._rrule[num].origOptions[closure_0];
        }
      }
    };
  }
  function $t(arg0, arr) {
    if (arg0 instanceof constants) {
      const _String2 = String;
      const mapped = arr.map(String);
      const _String3 = String;
      if (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp11 = !tmp10;
              if (null != mapped) {
                tmp11 = 0 === mapped.length;
              }
              const tmp12 = !tmp11 && -1 !== mapped.indexOf(tmp5);
              if (!tmp12) {
                arr = arr.push(arg0);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _TypeError = TypeError;
      const _String = String;
      const self = this;
      const self2 = this;
      const typeError = new TypeError(String(arg0) + " is not RRule instance");
      throw typeError;
    }
  }
  function Jt(arg0, _exdate) {
    if (arg0 instanceof Date) {
      const _Number = Number;
      const mapped = _exdate.map(Number);
      const _Number2 = Number;
      if (typeof p === "function") {
        if (typeof f === "function") {
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp11 = !tmp10;
              if (null != mapped) {
                tmp11 = 0 === mapped.length;
              }
              const tmp12 = !tmp11 && -1 !== mapped.indexOf(tmp5);
              if (!tmp12) {
                _exdate.push(arg0);
                if (typeof R === "function") {
                  const sorted = _exdate.sort(f151903);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _TypeError = TypeError;
      const _String = String;
      const self = this;
      const self2 = this;
      const typeError = new TypeError(String(arg0) + " is not Date instance");
      throw typeError;
    }
  }
  let obj = {
    d(arg0, obj) {
      for (const key10005 in obj) {
        let obj2 = obj;
        let oResult = obj.o(obj, key10005) && !obj2.o(arg0, key10005);
        if (!oResult) {
          continue;
        } else {
          let _Object = Object;
          obj = { enumerable: true, get: obj[key10005] };
          let definePropertyResult = Object.defineProperty(arg0, key10005, obj);
          continue;
        }
        continue;
      }
    },
    o(arg0, arg1) {
      hasOwnProperty = Object.prototype.hasOwnProperty;
      return hasOwnProperty.call(arg0, arg1);
    },
    r(arg0) {
      let toStringTag = typeof Symbol !== "undefined";
      if (typeof Symbol !== "undefined") {
        const _Symbol2 = Symbol;
        toStringTag = Symbol.toStringTag;
      }
      if (toStringTag) {
        const _Object = Object;
        const _Symbol = Symbol;
        Object.defineProperty(arg0, Symbol.toStringTag, { value: "Module" });
      }
    },
  };
  let obj2 = {};
  obj.r(obj2);
  let obj3 = {
    Frequency() {
      return obj6;
    },
    RRule() {
      return constants;
    },
    RRuleSet() {
      return closure_76;
    },
    Weekday() {
      return t;
    },
    datetime() {
      return b;
    },
    rrulestr() {
      return Bt;
    },
  };
  obj.d(obj2, obj3);
  let length = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  class t {
    constructor(weekday, n) {
      obj = {};
      if (0 === n) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Can't create weekday with n == 0");
        throw error;
      } else {
        obj.weekday = weekday;
        obj.n = n;
      }
    }
    static fromStr(arg0) {
      const weekday = length.indexOf(arg0);
      Object.create(t.prototype);
      return { weekday, n: undefined };
    }
    nth(n) {
      let self = this;
      if (this.n !== n) {
        const weekday = tmp.weekday;
        Object.create(t.prototype);
        obj = {};
        if (0 === n) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error("Can't create weekday with n == 0");
          throw error;
        } else {
          obj.weekday = weekday;
          obj.n = n;
          self = obj;
        }
      }
      return self;
    }
    equals(weekday) {
      return this.weekday === weekday.weekday && this.n === weekday.n;
    }
    toString() {
      const self = this;
      let sum = tmp;
      if (this.n) {
        let str = "";
        if (self.n > 0) {
          str = "+";
        }
        const _String = String;
        sum = str + String(self.n) + tmp;
      }
      return sum;
    }
    getJsWeekday() {
      let num = 0;
      if (6 !== this.weekday) {
        num = this.weekday + 1;
      }
      return num;
    }
    accept(arg0) {
      const self = this;
      this.total = this.total + 1;
      if ("between" === self.method) {
        if (this.minDate && arg0 < self.minDate) {
          return true;
        } else if (self.maxDate && arg0 > self.maxDate) {
          return false;
        }
      } else if ("before" === self.method) {
        if (self.maxDate && arg0 > self.maxDate) {
          return false;
        }
      } else if ("after" === self.method) {
        let flag = tmp;
        if (!flag) {
          self.add(arg0);
          flag = false;
        }
        return flag;
      }
      return self.add(arg0);
    }
    add(arg0) {
      const _result = this._result;
      _result.push(arg0);
      return true;
    }
    getValue() {
      let _result;
      let method;
      ({ _result, method } = this);
      if ("all" !== method) {
        if ("between" !== method) {
          let tmp = null;
          if (_result.length) {
            tmp = _result[_result.length - 1];
          }
          return tmp;
        }
      }
      return _result;
    }
    clone() {
      let args;
      let method;
      ({ method, args } = this);
      obj = Object.create(closure_0.prototype);
      new closure_0(method, args);
      return obj;
    }
    static isFullyConvertible(options) {
      if (options.options.freq in fullyConvertible.IMPLEMENTED) {
        if (options.origOptions.until) {
          if (options.origOptions.count) {
            return false;
          }
        }
        for (const key10014 in options.origOptions) {
          if (typeof z === "function") {
            let items = ["dtstart", "wkst", "freq"];
            if (-1 !== items.indexOf(key10014)) {
              let flag3 = true;
              return true;
            } else {
              let arr2 = fullyConvertible.IMPLEMENTED[options.options.freq];
              if (typeof tmp3 === "function") {
                if (-1 !== arr2.indexOf(key10014)) {
                  continue;
                } else {
                  let flag2 = false;
                  return false;
                }
              } else {
                let str2 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
          } else {
            let str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        return true;
      } else {
        return false;
      }
    }
    isFullyConvertible() {
      return fullyConvertible.isFullyConvertible(this.rrule);
    }
    HOURLY() {
      let gettextResult;
      const self = this;
      const gettext = this.gettext;
      if (1 !== this.options.interval) {
        const str = self.options.interval;
        self.add(str.toString());
      }
      const add = self.add;
      if (self.plural(self.options.interval)) {
        gettextResult = gettext("hours");
      } else {
        gettextResult = gettext("hour");
      }
      add(gettextResult);
    }
    MINUTELY() {
      let gettextResult;
      const self = this;
      const gettext = this.gettext;
      if (1 !== this.options.interval) {
        const str = self.options.interval;
        self.add(str.toString());
      }
      const add = self.add;
      if (self.plural(self.options.interval)) {
        gettextResult = gettext("minutes");
      } else {
        gettextResult = gettext("minute");
      }
      add(gettextResult);
    }
    DAILY() {
      let gettextResult1;
      const self = this;
      const gettext = this.gettext;
      if (1 !== this.options.interval) {
        const str = self.options.interval;
        self.add(str.toString());
      }
      if (self.byweekday) {
        if (self.byweekday.isWeekdays) {
          let gettextResult;
          const add2 = self.add;
          if (self.plural(self.options.interval)) {
            gettextResult = gettext("weekdays");
          } else {
            gettextResult = gettext("weekday");
          }
          add2(gettextResult);
        }
        if (self.origOptions.bymonth) {
          self.add(gettext("in"));
          self._bymonth();
        }
        if (self.bymonthday) {
          self._bymonthday();
        } else if (self.byweekday) {
          self._byweekday();
        } else if (self.origOptions.byhour) {
          self._byhour();
        }
      }
      const add = self.add;
      if (self.plural(self.options.interval)) {
        gettextResult1 = gettext("days");
      } else {
        gettextResult1 = gettext("day");
      }
      add(gettextResult1);
    }
    WEEKLY() {
      const self = this;
      const gettext = this.gettext;
      if (1 !== this.options.interval) {
        let gettextResult;
        const add = self.add(str.toString()).add;
        self.add(self.options.interval.toString());
        if (self.plural(self.options.interval)) {
          gettextResult = gettext("weeks");
        } else {
          gettextResult = gettext("week");
        }
        add(gettextResult);
      }
      if (self.byweekday) {
        if (self.byweekday.isWeekdays) {
          if (1 === self.options.interval) {
            let gettextResult1;
            const add3 = self.add;
            if (self.plural(self.options.interval)) {
              gettextResult1 = gettext("weekdays");
            } else {
              gettextResult1 = gettext("weekday");
            }
            add3(gettextResult1);
          } else {
            const addResult2 = self.add(gettext("on"));
            addResult2.add(gettext("weekdays"));
          }
        }
      }
      if (self.byweekday) {
        if (self.byweekday.isEveryDay) {
          let gettextResult2;
          const add2 = self.add;
          if (self.plural(self.options.interval)) {
            gettextResult2 = gettext("days");
          } else {
            gettextResult2 = gettext("day");
          }
          add2(gettextResult2);
        }
      }
      if (1 === self.options.interval) {
        self.add(gettext("week"));
      }
      if (self.origOptions.bymonth) {
        self.add(gettext("in"));
        self._bymonth();
      }
      if (self.bymonthday) {
        self._bymonthday();
      } else if (self.byweekday) {
        self._byweekday();
      }
    }
    MONTHLY() {
      const self = this;
      const gettext = this.gettext;
      const interval = this.options.interval;
      if (this.origOptions.bymonth) {
        if (1 !== interval) {
          const str4 = self.options.interval;
          const addResult = self.add(str4.toString());
          addResult.add(gettext("months"));
          if (self.plural(self.options.interval)) {
            self.add(gettext("in"));
          }
        }
        self._bymonth();
      } else {
        let gettextResult;
        if (1 !== interval) {
          const str = self.options.interval;
          self.add(str.toString());
        }
        const add = self.add;
        if (self.plural(self.options.interval)) {
          gettextResult = gettext("months");
        } else {
          gettextResult = gettext("month");
        }
        add(gettextResult);
      }
      if (self.bymonthday) {
        self._bymonthday();
      } else {
        if (self.byweekday) {
          if (self.byweekday.isWeekdays) {
            const addResult5 = self.add(gettext("on"));
            addResult5.add(gettext("weekdays"));
          }
        }
        if (self.byweekday) {
          self._byweekday();
        }
      }
    }
    YEARLY() {
      const self = this;
      const gettext = this.gettext;
      const interval = this.options.interval;
      if (this.origOptions.bymonth) {
        if (1 !== interval) {
          const str4 = self.options.interval;
          self.add(str4.toString());
          self.add(gettext("years"));
        }
        self._bymonth();
      } else {
        let gettextResult;
        if (1 !== interval) {
          const str = self.options.interval;
          self.add(str.toString());
        }
        const add = self.add;
        if (self.plural(self.options.interval)) {
          gettextResult = gettext("years");
        } else {
          gettextResult = gettext("year");
        }
        add(gettextResult);
      }
      if (self.bymonthday) {
        self._bymonthday();
      } else if (self.byweekday) {
        self._byweekday();
      }
      if (self.options.byyearday) {
        const addResult4 = self.add(gettext("on the"));
        const addResult5 = addResult4.add(self.list(self.options.byyearday, self.nth, gettext("and")));
        addResult5.add(gettext("day"));
      }
      if (self.options.byweekno) {
        let gettextResult1;
        const add2 = self.add(gettext("in")).add;
        self.add(gettext("in"));
        if (self.plural(self.options.byweekno.length)) {
          gettextResult1 = gettext("weeks");
        } else {
          gettextResult1 = gettext("week");
        }
        const add2Result = add2(gettextResult1);
        add2Result.add(self.list(self.options.byweekno, undefined, gettext("and")));
      }
    }
    _bymonthday() {
      let bymonthday;
      let bymonthday2;
      let list;
      let list2;
      let nth;
      let nth2;
      const self = this;
      const gettext = this.gettext;
      if (this.byweekday) {
        if (self.byweekday.allWeeks) {
          const addResult = self.add(gettext("on"));
          ({ list: list2, bymonthday: bymonthday2, nth: nth2 } = self);
          const addResult1 = addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext, gettext("or")));
          const addResult2 = addResult1.add(gettext("the"));
          addResult2.add(list2(bymonthday2, nth2, gettext("or")));
        }
      }
      ({ list, bymonthday, nth } = self);
      const addResult4 = self.add(gettext("on the"));
      addResult4.add(list(bymonthday, nth, gettext("and")));
    }
    _byweekday() {
      const self = this;
      const gettext = this.gettext;
      const tmp = this.byweekday.allWeeks && !self.byweekday.isWeekdays;
      if (tmp) {
        const addResult = self.add(gettext("on"));
        addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext));
      }
      if (self.byweekday.someWeeks) {
        if (self.byweekday.allWeeks) {
          self.add(gettext("and"));
        }
        const addResult3 = self.add(gettext("on the"));
        addResult3.add(self.list(self.byweekday.someWeeks, self.weekdaytext, gettext("and")));
      }
    }
    _byhour() {
      const gettext = this.gettext;
      const addResult = this.add(gettext("at"));
      addResult.add(this.list(this.origOptions.byhour, undefined, gettext("and")));
    }
    _bymonth() {
      let add;
      let list;
      ({ add, list } = this);
      add(list(this.options.bymonth, this.monthtext, this.gettext("and")));
    }
    monthtext(arg0) {
      return this.language.monthNames[arg0 - 1];
    }
    weekdaytext(getJsWeekday) {
      if (typeof o === "function") {
        let result;
        if (typeof getJsWeekday === "number") {
          result = (getJsWeekday + 1) % 7;
        } else {
          result = getJsWeekday.getJsWeekday();
        }
        const self = this;
        let str = "";
        if (getJsWeekday.n) {
          str = `${self.nth(getJsWeekday.n)} `;
        }
        return str + self.language.dayNames[result];
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    plural(arg0) {
      return arg0 % 100 !== 1;
    }
    list(arg0, arg1, arg2, arg3) {
      let joined;
      fn = arg1;
      let str = arg3;
      const self = this;
      if (undefined === arg3) {
        str = ",";
      }
      let arr = arg0;
      if (!isArray(arg0)) {
        const items = [arg0];
        arr = items;
      }
      if (!fn) {
        fn = (arg0) => arg0.toString();
      }
      const mapped = arr.map(function o(item) {
        const callResult = fn && fn.call(self, item);
        return callResult;
      });
      if (arg2) {
        let str3 = "";
        let num3 = 0;
        let str5 = "";
        if (0 < mapped.length) {
          do {
            let tmp5 = str3;
            if (0 !== num3) {
              if (num3 === mapped.length - 1) {
                let _HermesInternal = HermesInternal;
                combined = `` + ` ${arg2}` + " ";
              } else {
                combined = `${str + " "}`;
              }
              tmp5 = combined;
            }
            str3 = tmp5 + mapped[num3];
            num3 = num3 + 1;
            str5 = str3;
          } while (num3 < mapped.length);
        }
        joined = str5;
      } else {
        joined = mapped.join(`${str} `);
      }
      return joined;
    }
    start(text) {
      obj = { text, done: false };
      return obj.nextSymbol();
    }
    isDone() {
      const done = this.done && null === this.symbol;
      return done;
    }
    nextSymbol() {
      let tmp2;
      obj = { symbol: null, value: null };
      while (!obj.done) {
        let tmp3 = tmp2;
        let tmp4 = null;
        let tmp5 = tmp2;
        let tmp6 = null;
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp5 = tmp3;
          tmp6 = tmp4;
          let tmp10 = keys[tmp];
          while (tmp10 !== undefined) {
            let obj2 = obj.rules[tmp10];
            let match = obj2.exec(obj.text);
            let tmp12 = match;
            if (tmp12) {
              let tmp11 = null === tmp4 || match[0].length > tmp4[0].length;
              tmp12 = tmp11;
            }
            if (!tmp12) {
              continue;
            } else {
              tmp3 = tmp10;
              tmp4 = match;
              continue;
            }
            continue;
          }
        }
        if (null != tmp6) {
          let str = obj.text;
          obj.text = str.substr(tmp6[0].length);
          if ("" === obj.text) {
            obj.done = true;
          }
        }
        if (null == tmp6) {
          obj.done = true;
          obj.symbol = null;
          obj.value = null;
        } else {
          tmp2 = tmp5;
          if ("SKIP" === tmp5) {
            continue;
          } else {
            obj.symbol = tmp5;
            obj.value = tmp6;
            return true;
          }
        }
      }
      return false;
    }
    acceptNumber() {
      return this.accept("number");
    }
    expect(arg0) {
      if (this.accept(arg0)) {
        return true;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("expected " + arg0 + " but found " + this.symbol);
        throw error;
      }
    }
    getHours() {
      return this.hour;
    }
    getMinutes() {
      return this.minute;
    }
    getSeconds() {
      return this.second;
    }
    getMilliseconds() {
      return this.millisecond;
    }
    getTime() {
      return 1000 * (60 * this.hour * 60 + 60 * this.minute + this.second) + this.millisecond;
    }
    rezonedDate() {
      let date1;
      if (this.isUTC) {
        date1 = date;
      } else {
        const tzid = tmp.tzid;
        const _Intl = Intl;
        Intl.DateTimeFormat();
        if (typeof C === "function") {
          const self = this;
          const self2 = this;
          obj = { timeZone: tmp4 };
          const str2 = this.date.toLocaleString("sv-SE", obj);
          let str6 = "UTC";
          const _Date = Date;
          const tmp52 = new tmp5(str2.replace(" ", "T") + "Z");
          if (null != tzid) {
            str6 = tzid;
          }
          if (typeof tmp6 === "function") {
            const self3 = this;
            const self4 = this;
            const obj2 = { timeZone: str6 };
            const str7 = this.date.toLocaleString("sv-SE", obj2);
            const _Date1 = new _Date(str7.replace(" ", "T") + "Z");
            const time = _Date1.getTime();
            const _Date2 = Date;
            const diff = time - tmp52.getTime();
            const self5 = this;
            const self6 = this;
            date1 = new Date(date.getTime() - diff);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return date1;
    }
    _cacheAdd(arg0, getTime, arg2) {
      let tmp = getTime;
      if (tmp) {
        const _Date = Date;
        if (getTime instanceof Date) {
          if (typeof M === "function") {
            const _Date3 = Date;
            const self3 = this;
            const self4 = this;
            date = new Date(getTime.getTime());
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof _ === "function") {
          const items = [];
          let num = 0;
          date = items;
          if (0 < getTime.length) {
            obj = getTime[num];
            while (typeof M === "function") {
              let _Date2 = Date;
              let self = this;
              let self2 = this;
              let date1 = new Date(obj.getTime());
              let tmp5Result = tmp5(date1);
              num = num + 1;
              date = items;
            }
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        tmp = date;
      }
      const self5 = this;
      if ("all" === arg0) {
        self5.all = tmp;
      } else {
        arg2._value = tmp;
        const arr2 = self5[arg0];
        arr2.push(arg2);
      }
    }
    _cacheGet(arg0, arg1) {
      let date1;
      let flag;
      let keys;
      const tmp = arg1;
      if (tmp) {
        const _Object = Object;
        keys = Object.keys(arg1);
      } else {
        keys = [];
      }
      const self = this;
      if ("all" === arg0) {
        flag = self.all;
      } else {
        flag = false;
        if (isArray(this[arg0])) {
          let num3 = 0;
          flag = false;
          if (0 < this[arg0].length) {
            while (keys.length) {
              let num4 = 0;
              let flag2 = false;
              if (0 < keys.length) {
                while (true) {
                  let tmp8;
                  let tmp6 = keys[num4];
                  let arr3 = arg1[tmp6];
                  let arr4 = tmp4[tmp6];
                  let _Array = Array;
                  if (Array.isArray(arr3)) {
                    let _Array2 = Array;
                    let tmp11 =
                      Array.isArray(arr4) &&
                      arr3.length === arr4.length &&
                      arr3.every((getTime, index) => {
                        obj = arr4[index];
                        const time = getTime.getTime();
                        return time === obj.getTime();
                      });
                    tmp8 = tmp11;
                  } else {
                    let _Date = Date;
                    if (arr3 instanceof Date) {
                      let _Date2 = Date;
                      let tmp9 = arr4 instanceof Date;
                      if (tmp9) {
                        let time = arr3.getTime();
                        tmp9 = time === arr4.getTime();
                      }
                      tmp8 = tmp9;
                    } else {
                      tmp8 = arr3 === arr4;
                    }
                  }
                  flag2 = true;
                  if (!tmp8) {
                    break;
                  } else {
                    let sum = num4 + 1;
                    num4 = sum;
                    flag2 = false;
                    if (sum >= keys.length) {
                      break;
                    }
                  }
                }
              }
              if (!flag2) {
                break;
              } else {
                let sum1 = num3 + 1;
                num3 = sum1;
                flag = false;
              }
            }
            flag = tmp4._value;
          }
        }
      }
      let arr5 = flag;
      if (!arr5) {
        arr5 = flag;
        if (self.all) {
          const self2 = this;
          const self3 = this;
          new closure_36(arg0, arg1);
          if (0 < self.all.length) {
            let num7 = 0;
            if (self2.accept(self.all[0])) {
              const sum2 = num7 + 1;
              while (sum2 < self.all.length) {
                num7 = sum2;
                if (!self2.accept(self.all[sum2])) {
                  break;
                }
              }
            }
          }
          const value = self2.getValue();
          self._cacheAdd(arg0, value, arg1);
          arr5 = value;
        }
      }
      if (isArray(arr5)) {
        if (typeof _ === "function") {
          const items = [];
          let num8 = 0;
          date1 = items;
          if (0 < arr5.length) {
            obj = arr5[num8];
            while (typeof M === "function") {
              let _Date5 = Date;
              let self6 = this;
              let self7 = this;
              date = new Date(obj.getTime());
              let tmp26Result = tmp26(date);
              num8 = num8 + 1;
              date1 = items;
            }
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const _Date3 = Date;
        date1 = arr5;
        if (arr5 instanceof Date) {
          if (typeof M === "function") {
            const _Date4 = Date;
            const self4 = this;
            const self5 = this;
            date1 = new Date(arr5.getTime());
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      return date1;
    }
    rebuild(lastyear, lastmonth) {
      let tmp128;
      let tmp129;
      let wdaymask;
      let yearlen;
      const self = this;
      const options = this.options;
      if (lastyear !== this.lastyear) {
        if (typeof b === "function") {
          const _Date = Date;
          const _Date2 = Date;
          const _Date3 = Date;
          const self2 = this;
          const self3 = this;
          date = new Date(Date.UTC(lastyear, 0, 1, 0, 0, 0));
          if (typeof k === "function") {
            const result = lastyear % 4;
            let tmp5 = result === 0;
            if (result === 0) {
              tmp5 = lastyear % 100 !== 0;
            }
            if (!tmp5) {
              tmp5 = lastyear % 400 === 0;
            }
            let num11 = 365;
            let num12 = 365;
            if (tmp5) {
              num12 = 366;
            }
            const sum = lastyear + 1;
            if (typeof k === "function") {
              const result1 = sum % 4;
              let tmp8 = result1 === 0;
              if (result1 === 0) {
                tmp8 = sum % 100 !== 0;
              }
              if (!tmp8) {
                tmp8 = sum % 400 === 0;
              }
              let num15 = num11;
              if (tmp8) {
                num15 = 366;
              }
              if (typeof O === "function") {
                if (typeof x === "function") {
                  const diff = tmp12 - 60 * date.getTimezoneOffset() * 1000;
                  if (typeof tmp13 === "function") {
                    const _Math = Math;
                    if (typeof U === "function") {
                      const tmp19 = closure_19[date.getUTCDay(date)];
                      obj = { yearlen: num12, nextyearlen: num15, yearordinal: tmp16, yearweekday: tmp19 };
                      if (typeof k === "function") {
                        const result2 = lastyear % 4;
                        let tmp22 = result2 === 0;
                        if (result2 === 0) {
                          tmp22 = lastyear % 100 !== 0;
                        }
                        if (!tmp22) {
                          tmp22 = lastyear % 400 === 0;
                        }
                        let num20 = num11;
                        if (tmp22) {
                          num20 = 366;
                        }
                        if (typeof tmp154 === "function") {
                          const _Date4 = Date;
                          const _Date5 = Date;
                          const _Date6 = Date;
                          const self4 = this;
                          const self5 = this;
                          const date1 = new Date(Date.UTC(lastyear, 0, 1, 0, 0, 0));
                          if (typeof tmp17 === "function") {
                            let obj3;
                            const tmp25 = closure_19[date1.getUTCDay(date1)];
                            if (num11 === num20) {
                              obj3 = {
                                mmask,
                                mdaymask: mdaymask2,
                                nmdaymask: nmdaymask2,
                                wdaymask: combined.slice(tmp25),
                                mrange: mrange2,
                              };
                              const obj2 = {
                                mmask,
                                mdaymask: mdaymask2,
                                nmdaymask: nmdaymask2,
                                wdaymask: combined.slice(tmp25),
                                mrange: mrange2,
                              };
                            } else {
                              obj3 = { mmask: mmask2, mdaymask, nmdaymask, wdaymask: combined.slice(tmp25), mrange };
                            }
                            const tmp20Result = obj(obj(obj, obj3), { wnomask: null });
                            const byweekno = options.byweekno;
                            if (typeof l === "function") {
                              if (typeof i === "function") {
                                let tmp41 = !tmp40;
                                if (null != byweekno) {
                                  tmp41 = 0 === byweekno.length;
                                }
                                if (!tmp41) {
                                  if (typeof h === "function") {
                                    const sum1 = num12 + 7;
                                    const items = [];
                                    if (isArray(0)) {
                                      let num28 = 0;
                                      if (0 < sum1) {
                                        do {
                                          let items1 = [];
                                          items[num28] = items1.concat(0);
                                          num28 = num28 + 1;
                                        } while (num28 < sum1);
                                      }
                                    } else {
                                      let num27 = 0;
                                      if (0 < sum1) {
                                        do {
                                          items[num27] = 0;
                                          num27 = num27 + 1;
                                        } while (num27 < sum1);
                                      }
                                    }
                                    tmp20Result.wnomask = items;
                                    if (typeof c === "function") {
                                      let sum4;
                                      let num29;
                                      const result3 = (7 - tmp19 + options.wkst) % 7;
                                      let sum2 = result3;
                                      if (result3 * 7 < 0) {
                                        sum2 = result3 + 7;
                                      }
                                      if (4 <= sum2) {
                                        if (typeof c === "function") {
                                          const result4 = (tmp19 - options.wkst) % 7;
                                          let sum3 = result4;
                                          if (result4 * 7 < 0) {
                                            sum3 = result4 + 7;
                                          }
                                          sum4 = tmp49 + sum3;
                                          num29 = 0;
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        sum4 = num12 - sum2;
                                        num29 = sum2;
                                      }
                                      const _Math2 = Math;
                                      if (typeof c === "function") {
                                        let num30;
                                        const result5 = sum4 % 7;
                                        let sum5 = result5;
                                        if (result5 * 7 < 0) {
                                          sum5 = result5 + 7;
                                        }
                                        const _Math3 = Math;
                                        const rounded = Math.floor(tmp52 + sum5 / 4);
                                        const diff1 = 7 - sum2;
                                        for (let num30 = 0; num30 < options.byweekno.length; num30 = num30 + 1) {
                                          let tmp57 = options.byweekno[num30];
                                          let sum6 = tmp57;
                                          if (tmp57 < 0) {
                                            sum6 = tmp57 + (rounded + 1);
                                          }
                                          if (sum6 > 0) {
                                            if (sum6 <= rounded) {
                                              let diff2 = num29;
                                              if (sum6 > 1) {
                                                let sum7 = num29 + 7 * (sum6 - 1);
                                                diff2 = sum7;
                                                if (num29 !== sum2) {
                                                  diff2 = sum7 - diff1;
                                                }
                                              }
                                              tmp20Result.wnomask[diff2] = 1;
                                              let sum8 = diff2 + 1;
                                              let num31 = 0;
                                              if (tmp20Result.wdaymask[sum8] !== options.wkst) {
                                                let sum9 = num31 + 1;
                                                while (sum9 < 7) {
                                                  tmp20Result.wnomask[sum8] = 1;
                                                  let sum10 = sum8 + 1;
                                                  num31 = sum9;
                                                  sum8 = sum10;
                                                  if (tmp20Result.wdaymask[sum10] === options.wkst) {
                                                    break;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const byweekno1 = options.byweekno;
                                        if (typeof p === "function") {
                                          if (typeof f === "function") {
                                            if (typeof l === "function") {
                                              if (typeof i === "function") {
                                                let tmp71 = !tmp70;
                                                if (null != byweekno1) {
                                                  tmp71 = 0 === byweekno1.length;
                                                }
                                                const tmp72 = !tmp71 && -1 !== byweekno1.indexOf(1);
                                                if (tmp72) {
                                                  const sum11 = num29 + 7 * rounded;
                                                  let diff3 = sum11;
                                                  if (num29 !== sum2) {
                                                    diff3 = sum11 - diff1;
                                                  }
                                                  if (diff3 < num12) {
                                                    tmp20Result.wnomask[diff3] = 1;
                                                    let sum12 = diff3 + 1;
                                                    let num33 = 0;
                                                    if (tmp20Result.wdaymask[sum12] !== options.wkst) {
                                                      const sum13 = num33 + 1;
                                                      while (sum13 < 7) {
                                                        tmp20Result.wnomask[sum12] = 1;
                                                        let sum14 = sum12 + 1;
                                                        sum12 = sum14;
                                                        num33 = sum13;
                                                        if (tmp20Result.wdaymask[sum14] === options.wkst) {
                                                          break;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                if (num29) {
                                                  const byweekno2 = options.byweekno;
                                                  if (typeof p === "function") {
                                                    if (typeof f === "function") {
                                                      if (typeof l === "function") {
                                                        if (typeof i === "function") {
                                                          let tmp84 = !tmp83;
                                                          if (null != byweekno2) {
                                                            tmp84 = 0 === byweekno2.length;
                                                          }
                                                          let num36 = -1;
                                                          const tmp85 = !tmp84 && -1 !== byweekno2.indexOf(-1);
                                                          if (!tmp85) {
                                                            const diff4 = lastyear - 1;
                                                            if (typeof b === "function") {
                                                              const _Date7 = Date;
                                                              const _Date8 = Date;
                                                              const _Date9 = Date;
                                                              const self6 = this;
                                                              const self7 = this;
                                                              const date2 = new Date(Date.UTC(diff4, 0, 1, 0, 0, 0));
                                                              if (typeof tmp86 === "function") {
                                                                const obj7 = closure_19[date2.getUTCDay(date2)];
                                                                if (typeof c === "function") {
                                                                  const result6 =
                                                                    (7 - obj7.valueOf() + options.wkst) % 7;
                                                                  let sum15 = result6;
                                                                  if (result6 * 7 < 0) {
                                                                    sum15 = result6 + 7;
                                                                  }
                                                                  const diff5 = lastyear - 1;
                                                                  if (typeof k === "function") {
                                                                    let sum17;
                                                                    const result7 = diff5 % 4;
                                                                    let tmp98 = result7 === 0;
                                                                    if (result7 === 0) {
                                                                      tmp98 = diff5 % 100 !== 0;
                                                                    }
                                                                    if (!tmp98) {
                                                                      tmp98 = diff5 % 400 === 0;
                                                                    }
                                                                    if (tmp98) {
                                                                      num11 = 366;
                                                                    }
                                                                    if (4 <= sum15) {
                                                                      if (typeof c === "function") {
                                                                        const result8 = (obj7 - options.wkst) % 7;
                                                                        let sum16 = result8;
                                                                        if (result8 * 7 < 0) {
                                                                          sum16 = result8 + 7;
                                                                        }
                                                                        sum17 = num11 + sum16;
                                                                      } else {
                                                                        throw new TypeError(
                                                                          "Trying to call a non-function",
                                                                        );
                                                                      }
                                                                    } else {
                                                                      sum17 = num12 - num29;
                                                                    }
                                                                    if (typeof c === "function") {
                                                                      const result9 = sum17 % 7;
                                                                      let sum18 = result9;
                                                                      if (result9 * 7 < 0) {
                                                                        sum18 = result9 + 7;
                                                                      }
                                                                      num36 = tmp103(52 + sum18 / 4);
                                                                    } else {
                                                                      throw new TypeError(
                                                                        "Trying to call a non-function",
                                                                      );
                                                                    }
                                                                  } else {
                                                                    throw new TypeError(
                                                                      "Trying to call a non-function",
                                                                    );
                                                                  }
                                                                } else {
                                                                  throw new TypeError("Trying to call a non-function");
                                                                }
                                                              } else {
                                                                throw new TypeError("Trying to call a non-function");
                                                              }
                                                            } else {
                                                              throw new TypeError("Trying to call a non-function");
                                                            }
                                                          }
                                                          const byweekno3 = options.byweekno;
                                                          if (typeof tmp79 === "function") {
                                                            if (typeof tmp80 === "function") {
                                                              if (typeof tmp81 === "function") {
                                                                if (typeof tmp82 === "function") {
                                                                  let tmp107 = !tmp106;
                                                                  if (null != byweekno3) {
                                                                    tmp107 = 0 === byweekno3.length;
                                                                  }
                                                                  const tmp108 =
                                                                    !tmp107 && -1 !== byweekno3.indexOf(num36);
                                                                  if (tmp108) {
                                                                    let num45 = 0;
                                                                    if (0 < num29) {
                                                                      do {
                                                                        tmp20Result.wnomask[num45] = 1;
                                                                        num45 = num45 + 1;
                                                                      } while (num45 < num29);
                                                                    }
                                                                  }
                                                                } else {
                                                                  throw new TypeError("Trying to call a non-function");
                                                                }
                                                              } else {
                                                                throw new TypeError("Trying to call a non-function");
                                                              }
                                                            } else {
                                                              throw new TypeError("Trying to call a non-function");
                                                            }
                                                          } else {
                                                            throw new TypeError("Trying to call a non-function");
                                                          }
                                                        } else {
                                                          throw new TypeError("Trying to call a non-function");
                                                        }
                                                      } else {
                                                        throw new TypeError("Trying to call a non-function");
                                                      }
                                                    } else {
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  } else {
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                }
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            } else {
                                              throw new TypeError("Trying to call a non-function");
                                            }
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                self.yearinfo = tmp20Result;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const bynweekday = options.bynweekday;
      if (typeof f === "function") {
        if (typeof l === "function") {
          if (typeof i === "function") {
            let tmp113 = !tmp112;
            if (null != bynweekday) {
              tmp113 = 0 === bynweekday.length;
            }
            if (!tmp113) {
              if (lastmonth !== self.lastmonth) {
                let arr9;
                ({ yearlen, mrange, wdaymask } = self.yearinfo);
                const obj4 = { lastyear, lastmonth, nwdaymask: [] };
                const items2 = [];
                if (options.freq === constants.YEARLY) {
                  const bymonth = options.bymonth;
                  if (typeof tmp109 === "function") {
                    if (typeof tmp110 === "function") {
                      let tmp117 = !tmp116;
                      if (null != bymonth) {
                        tmp117 = 0 === bymonth.length;
                      }
                      if (tmp117) {
                        const items3 = [0, yearlen];
                        const items4 = [items3];
                        arr9 = items4;
                      } else {
                        let num48 = 0;
                        arr9 = items2;
                        if (0 < options.bymonth.length) {
                          do {
                            let tmp118 = options.bymonth[num48];
                            let arr = items2.push(mrange.slice(tmp118 - 1, tmp118 + 1));
                            num48 = num48 + 1;
                            arr9 = items2;
                            length = options.bymonth.length;
                          } while (num48 < length);
                        }
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  arr9 = items2;
                  if (options.freq === tmp115.MONTHLY) {
                    const items5 = [mrange.slice(lastmonth - 1, lastmonth + 1)];
                    arr9 = items5;
                  }
                }
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    if (0 !== arr9.length) {
                      if (typeof h === "function") {
                        const items6 = [];
                        if (isArray(0)) {
                          let num54;
                          for (let num54 = 0; num54 < yearlen; num54 = num54 + 1) {
                            let items7 = [];
                            items6[num54] = items7.concat(0);
                          }
                        } else {
                          let num52;
                          for (let num52 = 0; num52 < yearlen; num52 = num52 + 1) {
                            items6[num52] = 0;
                          }
                        }
                        obj4.nwdaymask = items6;
                        let num57 = 0;
                        if (0 < arr9.length) {
                          while (true) {
                            let tmp124 = arr9[num57];
                            let first = tmp124[0];
                            let diff6 = tmp124[1] - 1;
                            let num58 = 0;
                            if (0 < options.bynweekday.length) {
                              while (true) {
                                let diff7;
                                [tmp128, tmp129] = options.bynweekday[num58];
                                if (tmp129 < 0) {
                                  let sum19 = diff6 + 7 * (tmp129 + 1);
                                  if (typeof c === "function") {
                                    let result10 = (wdaymask[sum19] - tmp128) % 7;
                                    let sum20 = result10;
                                    if (result10 * 7 < 0) {
                                      sum20 = result10 + 7;
                                    }
                                    diff7 = sum19 - sum20;
                                  } else {
                                    let str44 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let sum21 = first + 7 * (tmp129 - 1);
                                  if (typeof c !== "function") {
                                    break;
                                  } else {
                                    let result11 = tmp133 % 7;
                                    let sum22 = result11;
                                    if (result11 * 7 < 0) {
                                      sum22 = result11 + 7;
                                    }
                                    diff7 = sum21 + sum22;
                                  }
                                }
                                let tmp141 = first <= diff7 && diff7 <= diff6;
                                if (tmp141) {
                                  obj4.nwdaymask[diff7] = 1;
                                }
                                num58 = num58 + 1;
                                continue;
                              }
                              let str43 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                            num57 = num57 + 1;
                          }
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    self.monthinfo = obj4;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
            if (typeof i === "function") {
              if (null != options.byeaster) {
                let num59 = options.byeaster;
                if (undefined === num59) {
                  num59 = 0;
                }
                const result12 = lastyear % 19;
                const _Math4 = Math;
                const rounded1 = Math.floor(lastyear / 100);
                const result13 = lastyear % 100;
                const _Math5 = Math;
                const _Math6 = Math;
                const rounded2 = Math.floor(rounded1 / 4);
                const result14 = rounded1 % 4;
                const _Math7 = Math;
                const _Math8 = Math;
                const result15 =
                  Math.floor(
                    19 * result12 +
                      rounded1 -
                      rounded2 -
                      Math.floor((rounded1 - Math.floor((rounded1 + 8) / 25) + 1) / 3) +
                      15,
                  ) % 30;
                const _Math9 = Math;
                const _Math10 = Math;
                const result16 =
                  Math.floor(32 + 2 * result14 + 2 * Math.floor(result13 / 4) - result15 - (result13 % 4)) % 7;
                const _Math11 = Math;
                const rounded3 = Math.floor((result12 + 11 * result15 + 22 * result16) / 451);
                const _Math12 = Math;
                const sum23 = result15 + result16;
                const _Date10 = Date;
                const _Date11 = Date;
                const _Math13 = Math;
                const items8 = [];
                const UTCResult = Date.UTC(
                  lastyear,
                  Math.floor((sum23 - 7 * rounded3 + 114) / 31) - 1,
                  ((sum23 - 7 * rounded3 + 114) % 31) + 1 + num59,
                );
                items8[0] = Math.ceil((UTCResult - Date.UTC(lastyear, 0, 1)) / 86400000);
                self.eastermask = items8;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    ydayset() {
      const items = [fn(this.yearlen), 0, this.yearlen];
      return items;
    }
    mdayset(arg0, arg1) {
      const yearlen = this.yearlen;
      if (typeof h === "function") {
        const items = [];
        if (isArray(null)) {
          let num3;
          for (let num3 = 0; num3 < yearlen; num3 = num3 + 1) {
            let items1 = [];
            items[num3] = items1.concat(null);
          }
        } else {
          let num2;
          for (let num2 = 0; num2 < yearlen; num2 = num2 + 1) {
            items[num2] = null;
          }
        }
        let sum = tmp;
        if (this.mrange[arg1 - 1] < this.mrange[arg1]) {
          do {
            items[sum] = sum;
            sum = sum + 1;
          } while (sum < this.mrange[arg1]);
        }
        const items2 = [items, this.mrange[arg1 - 1], this.mrange[arg1]];
        return items2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    wdayset(arg0, arg1, arg2) {
      const self = this;
      const sum = this.yearlen + 7;
      if (typeof h === "function") {
        const items = [];
        if (isArray(null)) {
          let num5 = 0;
          if (0 < sum) {
            do {
              let items1 = [];
              items[num5] = items1.concat(null);
              num5 = num5 + 1;
            } while (num5 < sum);
          }
        } else {
          let num3 = 0;
          if (0 < sum) {
            do {
              items[num3] = null;
              num3 = num3 + 1;
            } while (num3 < sum);
          }
        }
        if (typeof b === "function") {
          const _Date = Date;
          const _Date2 = Date;
          const _Date3 = Date;
          const self2 = this;
          const self3 = this;
          date = new Date(Date.UTC(arg0, arg1 - 1, arg2, 0, 0, 0));
          if (typeof tmp4 === "function") {
            const obj2 = date;
            if (typeof x === "function") {
              const diff = tmp11 - 60 * date.getTimezoneOffset() * 1000;
              if (typeof tmp12 === "function") {
                const _Math = Math;
                const diff1 =
                  Math.round((diff - (tmp14 - 60 * obj2.getTimezoneOffset() * 1000)) / c17) - self.yearordinal;
                items[diff1] = diff1;
                const sum1 = diff1 + 1;
                let num12 = 0;
                let tmp18 = sum1;
                let tmp19 = sum1;
                if (self.wdaymask[sum1] !== self.options.wkst) {
                  const sum2 = num12 + 1;
                  tmp19 = tmp18;
                  while (sum2 < 7) {
                    items[tmp18] = tmp18;
                    let sum3 = tmp18 + 1;
                    num12 = sum2;
                    tmp18 = sum3;
                    tmp19 = sum3;
                    if (self.wdaymask[sum3] === self.options.wkst) {
                      break;
                    }
                  }
                }
                const items2 = [items, diff1, tmp19];
                return items2;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    ddayset(arg0, arg1, arg2) {
      const yearlen = this.yearlen;
      if (typeof h === "function") {
        const items = [];
        if (isArray(null)) {
          let num5;
          for (let num5 = 0; num5 < yearlen; num5 = num5 + 1) {
            let items1 = [];
            items[num5] = items1.concat(null);
          }
        } else {
          let num3;
          for (let num3 = 0; num3 < yearlen; num3 = num3 + 1) {
            items[num3] = null;
          }
        }
        if (typeof b === "function") {
          const _Date = Date;
          const _Date2 = Date;
          const _Date3 = Date;
          const self = this;
          const self2 = this;
          date = new Date(Date.UTC(arg0, arg1 - 1, arg2, 0, 0, 0));
          if (typeof tmp5 === "function") {
            const obj2 = date;
            if (typeof x === "function") {
              const diff = tmp12 - 60 * date.getTimezoneOffset() * 1000;
              if (typeof tmp13 === "function") {
                const _Math = Math;
                const diff1 =
                  Math.round((diff - (tmp15 - 60 * obj2.getTimezoneOffset() * 1000)) / c17) - tmp.yearordinal;
                items[diff1] = diff1;
                const items2 = [items, diff1, diff1 + 1];
                return items2;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    htimeset(arg0, arg1, arg2, arg3) {
      let closure_0 = arg0;
      let closure_1 = arg2;
      let closure_2 = arg3;
      const self = this;
      let closure_4 = [];
      const byminute = this.options.byminute;
      const item = byminute.forEach((item) => {
        closure_4 = closure_4.concat(self.mtimeset(closure_0, item, closure_1, closure_2));
      });
      obj = closure_4;
      if (typeof R === "function") {
        const sorted = obj.sort(f151903);
        return closure_4;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    mtimeset(arg0, arg1, arg2, arg3) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg3;
      const bysecond = this.options.bysecond;
      const mapped = bysecond.map((item) => {
        let num = closure_2;
        if (typeof closure_49 === "function") {
          obj = { hour: tmp, minute: tmp2, second: item, millisecond: num };
          if (!num) {
            num = 0;
          }
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      if (typeof R === "function") {
        const sorted = mapped.sort(f151903);
        return mapped;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    stimeset(hour, minute, arg2, arg3) {
      if (typeof closure_49 === "function") {
        let num = arg3;
        obj = { hour, minute, second: arg2, millisecond: num };
        if (!arg3) {
          num = 0;
        }
        const items = [obj];
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    getdayset(arg0) {
      const self = this;
      if (obj6.YEARLY === arg0) {
        const ydayset = self.ydayset;
        return ydayset.bind(self);
      } else if (obj6.MONTHLY === arg0) {
        const mdayset = self.mdayset;
        return mdayset.bind(self);
      } else if (obj6.WEEKLY === arg0) {
        const wdayset = self.wdayset;
        return wdayset.bind(self);
      } else {
        const DAILY = obj6.DAILY;
        const ddayset = self.ddayset;
        return ddayset.bind(self);
      }
    }
    gettimeset(arg0) {
      const self = this;
      if (obj6.HOURLY === arg0) {
        const htimeset = self.htimeset;
        return htimeset.bind(self);
      } else if (obj6.MINUTELY === arg0) {
        const mtimeset = self.mtimeset;
        return mtimeset.bind(self);
      } else if (obj6.SECONDLY === arg0) {
        const stimeset = self.stimeset;
        return stimeset.bind(self);
      }
    }
    static parseText(arg0, arg1) {
      return Q(arg0, arg1);
    }
    static fromText(arg0, arg1) {
      let tmp = arg1;
      if (undefined === arg1) {
        tmp = obj5;
      }
      const tmp3 = Q(arg0, tmp) || undefined;
      new constants(tmp3);
      return this;
    }
    static fromString(arg0) {
      const tmp2 = closure_0.parseString(arg0) || undefined;
      obj = Object.create(closure_0.prototype);
      new closure_0(tmp2);
      return obj;
    }
    _iter(arg0) {
      return At(arg0, this.options);
    }
    all(iterator) {
      const self = this;
      const tmp = iterator;
      if (tmp) {
        const self4 = this;
        if (typeof e === "function") {
          const tmp9 = closure_168_0.call(self4, "all", {}) || self4;
          tmp9.iterator = iterator;
          return tmp7(tmp9);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        let _cacheGetResult = self._cacheGet("all");
        if (false === _cacheGetResult) {
          const self2 = this;
          const self3 = this;
          const _iter = self._iter;
          new closure_36("all", {});
          const _iterResult = _iter(this);
          self._cacheAdd("all", _iterResult);
          _cacheGetResult = _iterResult;
        }
        return _cacheGetResult;
      }
    }
    between(getTime, getTime2, arg2, iterator) {
      let flag = arg2;
      if (undefined === arg2) {
        flag = false;
      }
      if (typeof T === "function") {
        if (typeof E === "function") {
          const _Date = Date;
          let tmp5 = getTime instanceof Date;
          if (tmp5) {
            const _isNaN = isNaN;
            tmp5 = !isNaN(getTime.getTime());
          }
          if (tmp5) {
            if (typeof tmp === "function") {
              if (typeof tmp2 === "function") {
                const _Date2 = Date;
                let tmp7 = getTime2 instanceof Date;
                if (tmp7) {
                  const _isNaN2 = isNaN;
                  tmp7 = !isNaN(getTime2.getTime());
                }
                if (tmp7) {
                  const self3 = this;
                  obj = { before: getTime2, after: getTime, inc: flag };
                  if (iterator) {
                    const self6 = this;
                    if (typeof e === "function") {
                      const tmp19 = closure_168_0.call(self6, "between", obj) || self6;
                      tmp19.iterator = iterator;
                      return tmp17(tmp19);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let _cacheGetResult = self3._cacheGet("between", obj);
                    if (false === _cacheGetResult) {
                      const self4 = this;
                      const self5 = this;
                      const _iter = self3._iter;
                      new closure_36("between", obj);
                      const _iterResult = _iter(this);
                      self3._cacheAdd("between", _iterResult, obj);
                      _cacheGetResult = _iterResult;
                    }
                    return _cacheGetResult;
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Invalid date passed in to RRule.between");
          throw error;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    before(getTime, arg1) {
      let flag = arg1;
      if (undefined === arg1) {
        flag = false;
      }
      if (typeof T === "function") {
        if (typeof E === "function") {
          const _Date = Date;
          let tmp4 = getTime instanceof Date;
          if (tmp4) {
            const _isNaN = isNaN;
            tmp4 = !isNaN(getTime.getTime());
          }
          if (tmp4) {
            const self3 = this;
            obj = { dt: getTime, inc: flag };
            let _cacheGetResult = this._cacheGet("before", obj);
            if (false === _cacheGetResult) {
              const self4 = this;
              const self5 = this;
              const _iter = self3._iter;
              new closure_36("before", obj);
              const _iterResult = _iter(this);
              self3._cacheAdd("before", _iterResult, obj);
              _cacheGetResult = _iterResult;
            }
            return _cacheGetResult;
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Invalid date passed in to RRule.before");
            throw error;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    after(getTime, arg1) {
      let flag = arg1;
      if (undefined === arg1) {
        flag = false;
      }
      if (typeof T === "function") {
        if (typeof E === "function") {
          const _Date = Date;
          let tmp4 = getTime instanceof Date;
          if (tmp4) {
            const _isNaN = isNaN;
            tmp4 = !isNaN(getTime.getTime());
          }
          if (tmp4) {
            const self3 = this;
            obj = { dt: getTime, inc: flag };
            let _cacheGetResult = this._cacheGet("after", obj);
            if (false === _cacheGetResult) {
              const self4 = this;
              const self5 = this;
              const _iter = self3._iter;
              new closure_36("after", obj);
              const _iterResult = _iter(this);
              self3._cacheAdd("after", _iterResult, obj);
              _cacheGetResult = _iterResult;
            }
            return _cacheGetResult;
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Invalid date passed in to RRule.after");
            throw error;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    count() {
      return this.all().length;
    }
    toText(arg0, arg1, arg2) {
      new closure_45(this, arg0, arg1, arg2);
      return this.toString();
    }
    isFullyConvertibleToText() {
      return isFullyConvertible(this);
    }
  }
  function i(arg0) {}
  function o(arg0) {}
  function a(arg0) {}
  let fn = function u(arg0, arg1) {
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = arg0;
    }
    let num = arg0;
    if (1 === arguments.length) {
      num = 0;
      tmp = arg0;
    }
    const items = [];
    if (num < tmp) {
      do {
        let arr = items.push(num);
        num = num + 1;
      } while (num < tmp);
    }
    return items;
  };
  function h(arg0, arg1) {}
  function c(arg0, arg1) {}
  function d(arg0, arg1) {}
  function l(arg0) {}
  function f(arg0) {}
  function p(arg0, arg1) {}
  function b(arg0, arg1, arg2, arg3, arg4, arg5) {
    let num = arg3;
    if (undefined === arg3) {
      num = 0;
    }
    let num2 = arg4;
    if (undefined === arg4) {
      num2 = 0;
    }
    let num3 = arg5;
    if (undefined === arg5) {
      num3 = 0;
    }
    date = new Date(Date.UTC(arg0, arg1 - 1, arg2, num, num2, num3));
    return date;
  }
  let closure_16 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let c17 = 86400000;
  let date = new Date(Date.UTC(1970, 0, 1, 0, 0, 0));
  let closure_19 = [6, 0, 1, 2, 3, 4, 5];
  function k(arg0) {}
  function E(arg0) {}
  function T(arg0) {}
  function x(arg0) {}
  function O(arg0) {}
  function D(arg0) {}
  function S(arg0) {}
  function U(arg0) {}
  function Y(arg0, arg1) {
    if (typeof b === "function") {
      const _Date = Date;
      const _Date2 = Date;
      const _Date3 = Date;
      const self = this;
      const self2 = this;
      date = new Date(Date.UTC(arg0, arg1 + 1 - 1, 1, 0, 0, 0));
      if (typeof U === "function") {
        const items = [closure_19[date.getUTCDay(date)]];
        if (typeof S === "function") {
          let num10;
          const uTCMonth = date.getUTCMonth();
          if (1 !== uTCMonth) {
            num10 = closure_16[uTCMonth];
          } else {
            const uTCFullYear = date.getUTCFullYear();
            if (typeof k === "function") {
              const result = uTCFullYear % 4;
              let tmp12 = result === 0;
              if (result === 0) {
                tmp12 = uTCFullYear % 100 !== 0;
              }
              if (!tmp12) {
                tmp12 = uTCFullYear % 400 === 0;
              }
              num10 = 29;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          items[1] = num10;
          return items;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function L(arg0, arg1) {}
  function M(arg0) {}
  function _(arg0) {}
  function R(arg0) {}
  function N(arg0, arg1) {}
  function A(arg0) {}
  function C(arg0, arg1) {}
  let closure_36 = tmp4;
  fn = function j(arg0, arg1) {
    const f151909 = (arg0, arg1) => {
      arg0.__proto__ = arg1;
    };
    fn = Object.setPrototypeOf;
    if (!fn) {
      const _Array = Array;
      fn = Object.create([]) instanceof Array && f151909;
      const fn2 = Object.create([]) instanceof Array && f151909;
    }
    if (!fn) {
      fn = (arg0, obj) => {
        for (const key10005 in obj) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(obj, key10005)) {
            continue;
          } else {
            arg0[key10005] = obj[key10005];
            continue;
          }
          continue;
        }
      };
    }
    return fn(arg0, arg1);
  };
  obj = function H() {
    obj =
      Object.assign ||
      function (arg0) {
        let num;
        length = arguments.length;
        for (let num = 1; num < length; num = num + 1) {
          let tmp = arguments[num];
          for (const key10012 in tmp) {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            if (!hasOwnProperty.call(tmp, key10012)) {
              continue;
            } else {
              arg0[key10012] = tmp[key10012];
              continue;
            }
            continue;
          }
        }
        return arg0;
      };
    return obj(...arguments);
  };
  let closure_0 = tmp4;
  class e {
    constructor(arg0, arg1, iterator) {
      const self = this;
      const tmp = e.call(self, arg0, arg1) || self;
      tmp.iterator = iterator;
      return tmp;
    }
    add(arg0) {
      let flag = this.iterator(arg0, this._result.length);
      if (flag) {
        const _result = this._result;
        _result.push(arg0);
        flag = true;
      }
      return flag;
    }
    static fromDate(getUTCFullYear) {
      const uTCFullYear = getUTCFullYear.getUTCFullYear();
      const sum = getUTCFullYear.getUTCMonth() + 1;
      const uTCDate = getUTCFullYear.getUTCDate();
      const uTCHours = getUTCFullYear.getUTCHours();
      const uTCMinutes = getUTCFullYear.getUTCMinutes();
      const uTCSeconds = getUTCFullYear.getUTCSeconds();
      const tmp7 = new this(
        uTCFullYear,
        sum,
        uTCDate,
        uTCHours,
        uTCMinutes,
        uTCSeconds,
        getUTCFullYear.valueOf() % 1000,
      );
      return tmp7;
    }
    getWeekday() {
      date = new Date(this.getTime());
      if (typeof U === "function") {
        return closure_19[date.getUTCDay(date)];
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    getTime() {
      date = new Date(
        Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond),
      );
      return date.getTime();
    }
    getDay() {
      return this.day;
    }
    getMonth() {
      return this.month;
    }
    getYear() {
      return this.year;
    }
    addYears(arg0) {
      this.year = this.year + arg0;
    }
    addMonths(arg0) {
      const self = this;
      this.month = this.month + arg0;
      if (this.month > 12) {
        const _Math = Math;
        if (typeof c === "function") {
          const result = self.month % 12;
          let sum = result;
          if (result * 12 < 0) {
            sum = result + 12;
          }
          self.month = sum;
          self.year = self.year + tmp4;
          if (0 === self.month) {
            self.month = 12;
            self.year = self.year - 1;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    addWeekly(arg0, arg1) {
      const self = this;
      if (arg1 > this.getWeekday()) {
        self.day = self.day + (-self.getWeekday() + 1 + (6 - arg1) + 7 * arg0);
      } else {
        self.day = self.day + (-self.getWeekday() - arg1 + 7 * arg0);
      }
      self.fixDay();
    }
    addDaily(arg0) {
      this.day = this.day + arg0;
      this.fixDay();
    }
    addHours(arg0, arg1, arr) {
      const self = this;
      if (arg1) {
        const _Math = Math;
        self.hour = self.hour + Math.floor((23 - self.hour) / arg0) * arg0;
      }
      self.hour = self.hour + arg0;
      const hour = self.hour;
      while (typeof d === "function") {
        let _Math2 = Math;
        let rounded = Math.floor(hour / 24);
        if (typeof c === "function") {
          let result = hour % 24;
          let sum = result;
          if (result * 24 < 0) {
            sum = result + 24;
          }
          if (rounded) {
            self.hour = sum;
            let addDailyResult = self.addDaily(rounded);
          }
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp8 = null != arr;
              let tmp9 = !tmp8;
              if (tmp8) {
                tmp9 = 0 === arr.length;
              }
              if (!tmp9) {
                if (typeof p === "function") {
                  if (typeof f === "function") {
                    if (typeof tmp6 === "function") {
                      if (typeof tmp7 === "function") {
                        let tmp13 = null != arr;
                        let tmp14 = !tmp13;
                        if (tmp13) {
                          tmp14 = 0 === arr.length;
                        }
                        let tmp15 = !tmp14 && -1 !== arr.indexOf(tmp11);
                      } else {
                        let str7 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      let str6 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let str5 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str4 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
            } else {
              let str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    addMinutes(arg0, arg1, arr, arr2) {
      const self = this;
      if (arg1) {
        const _Math = Math;
        self.minute = self.minute + Math.floor((1439 - (60 * self.hour + self.minute)) / arg0) * arg0;
      }
      self.minute = self.minute + arg0;
      const minute = self.minute;
      while (typeof d === "function") {
        let _Math2 = Math;
        let rounded = Math.floor(minute / 60);
        if (typeof c === "function") {
          let result = minute % 60;
          let sum = result;
          if (result * 60 < 0) {
            sum = result + 60;
          }
          if (rounded) {
            self.minute = sum;
            let addHoursResult = self.addHours(rounded, false, arr);
          }
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp8 = null != arr;
              let tmp9 = !tmp8;
              if (tmp8) {
                tmp9 = 0 === arr.length;
              }
              if (tmp9) {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp16 = null != arr2;
                    let tmp17 = !tmp16;
                    if (tmp16) {
                      tmp17 = 0 === arr2.length;
                    }
                    if (!tmp17) {
                      if (typeof p === "function") {
                        if (typeof f === "function") {
                          if (typeof l === "function") {
                            if (typeof i === "function") {
                              let tmp21 = null != arr2;
                              let tmp22 = !tmp21;
                              if (tmp21) {
                                tmp22 = 0 === arr2.length;
                              }
                              let tmp23 = !tmp22 && -1 !== arr2.indexOf(tmp19);
                            } else {
                              let str13 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            let str12 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str11 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str10 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    let str9 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str8 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else if (typeof p === "function") {
                if (typeof f === "function") {
                  if (typeof l === "function") {
                    if (typeof i === "function") {
                      let tmp13 = null != arr;
                      let tmp14 = !tmp13;
                      if (tmp13) {
                        tmp14 = 0 === arr.length;
                      }
                      let tmp15 = !tmp14 && -1 !== arr.indexOf(tmp11);
                    } else {
                      let str7 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let str6 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str5 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str4 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
              continue;
            } else {
              let str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    addSeconds(arg0, arg1, arr, arr2, arr3) {
      const self = this;
      if (arg1) {
        const _Math = Math;
        self.second =
          self.second + Math.floor((86399 - (3600 * self.hour + 60 * self.minute + self.second)) / arg0) * arg0;
      }
      self.second = self.second + arg0;
      const second = self.second;
      while (typeof d === "function") {
        let _Math2 = Math;
        let rounded = Math.floor(second / 60);
        if (typeof c === "function") {
          let result = second % 60;
          let sum = result;
          if (result * 60 < 0) {
            sum = result + 60;
          }
          if (rounded) {
            self.second = sum;
            let flag = false;
            let addMinutesResult = self.addMinutes(rounded, false, arr, arr2);
          }
          if (typeof l === "function") {
            if (typeof i === "function") {
              let tmp12 = null != arr;
              let tmp13 = !tmp12;
              if (tmp12) {
                tmp13 = 0 === arr.length;
              }
              if (tmp13) {
                if (typeof l === "function") {
                  if (typeof i === "function") {
                    let tmp20 = null != arr2;
                    let tmp21 = !tmp20;
                    if (tmp20) {
                      tmp21 = 0 === arr2.length;
                    }
                    if (tmp21) {
                      if (typeof l === "function") {
                        if (typeof i === "function") {
                          let tmp28 = null != arr3;
                          let tmp29 = !tmp28;
                          if (tmp28) {
                            tmp29 = 0 === arr3.length;
                          }
                          if (!tmp29) {
                            if (typeof p === "function") {
                              if (typeof f === "function") {
                                if (typeof l === "function") {
                                  if (typeof i === "function") {
                                    let tmp33 = null != arr3;
                                    let tmp34 = !tmp33;
                                    if (tmp33) {
                                      tmp34 = 0 === arr3.length;
                                    }
                                    let tmp35 = !tmp34 && -1 !== arr3.indexOf(tmp31);
                                  } else {
                                    let str19 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  let str18 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                let str17 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              let str16 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        } else {
                          let str15 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str14 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else if (typeof p === "function") {
                      if (typeof f === "function") {
                        if (typeof l === "function") {
                          if (typeof i === "function") {
                            let tmp25 = null != arr2;
                            let tmp26 = !tmp25;
                            if (tmp25) {
                              tmp26 = 0 === arr2.length;
                            }
                            let tmp27 = !tmp26 && -1 !== arr2.indexOf(tmp23);
                          } else {
                            let str13 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str12 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str11 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      let str10 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                    continue;
                  } else {
                    let str9 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str8 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else if (typeof p === "function") {
                if (typeof f === "function") {
                  if (typeof l === "function") {
                    if (typeof i === "function") {
                      let tmp17 = null != arr;
                      let tmp18 = !tmp17;
                      if (tmp17) {
                        tmp18 = 0 === arr.length;
                      }
                      let tmp19 = !tmp18 && -1 !== arr.indexOf(tmp15);
                    } else {
                      let str7 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let str6 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str5 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str4 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
              continue;
            } else {
              let str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    fixDay() {
      const self = this;
      if (this.day > 28) {
        let tmp2 = Y(self.year, self.month - 1)[1];
        if (self.day > tmp2) {
          if (self.day > tmp2) {
            while (true) {
              self.day = self.day - tmp2;
              self.month = self.month + 1;
              if (13 === self.month) {
                self.month = 1;
                self.year = self.year + 1;
                if (self.year > 9999) {
                  break;
                }
              }
              tmp2 = Y(self.year, self.month - 1)[1];
            }
          }
        }
      }
    }
    _iter(accept) {
      let _exdate;
      let _exrule;
      let _rdate;
      let _rrule;
      ({ _rrule, _exrule, _rdate, _exdate } = this);
      const tzidResult = this.tzid();
      let closure_0 = accept;
      t = tzidResult;
      accept = undefined;
      let closure_3 = {};
      accept = accept.accept;
      let item = _exdate.forEach(function (getTime) {
        if (typeof rangeError === "function") {
          obj = {};
          const _isNaN = isNaN;
          if (isNaN(getTime.getTime())) {
            const _RangeError = RangeError;
            const self = this;
            const self2 = this;
            rangeError = new RangeError("Invalid date passed to DateWithZone");
            throw rangeError;
          } else {
            obj.date = getTime;
            obj.tzid = tmp;
            const _Number = Number;
            closure_3[Number(obj.rezonedDate())] = true;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      accept.accept = function (arg0) {
        let callResult;
        const self = this;
        const NumberResult = Number(arg0);
        if (isNaN(NumberResult)) {
          callResult = accept.call(self, arg0);
        } else {
          let tmp3 = !closure_3[NumberResult];
          if (tmp3) {
            const _Date = Date;
            const self2 = this;
            const self3 = this;
            date = new Date(NumberResult - 1);
            const _Date2 = Date;
            const self4 = this;
            const self5 = this;
            const date1 = new Date(NumberResult + 1);
            let item = date1.forEach((between) => {
              const betweenResult = between.between(date, date1, true);
              const item = betweenResult.forEach((item) => {
                closure_1_3[Number(item)] = true;
              });
            });
            tmp3 = !closure_3[NumberResult];
          }
          callResult = !tmp3;
          if (tmp3) {
            closure_3[NumberResult] = true;
            callResult = accept.call(self, arg0);
          }
        }
        return callResult;
      };
      if ("between" === accept.method) {
        const after = accept.args.after;
        const before = accept.args.before;
        const item1 = _exrule.forEach((between) => {
          const betweenResult = between.between(date, date1, true);
          const item = betweenResult.forEach((item) => {
            closure_1_3[Number(item)] = true;
          });
        });
        accept.accept = function (arg0) {
          const NumberResult = Number(arg0);
          let callResult = closure_3[NumberResult];
          if (!callResult) {
            tmp2[NumberResult] = true;
            callResult = accept.call(this, arg0);
          }
          return callResult;
        };
      }
      let num = 0;
      if (0 < _rdate.length) {
        obj = _rdate[num];
        let self = this;
        while (typeof rangeError === "function") {
          let obj2 = {};
          let _isNaN = isNaN;
          if (isNaN(obj.getTime())) {
            let _RangeError = RangeError;
            let self4 = this;
            let str3 = "Invalid date passed to DateWithZone";
            let self5 = this;
            rangeError = new RangeError("Invalid date passed to DateWithZone");
            throw rangeError;
          } else {
            obj2.date = obj;
            obj2.tzid = tzidResult;
            let rezonedDateResult = obj2.rezonedDate();
            let _Date = Date;
            accept = accept.accept;
            let self2 = this;
            let self3 = this;
            date = new Date(rezonedDateResult.getTime());
            if (accept(date)) {
              num = num + 1;
            }
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
      const item2 = _rrule.forEach((options) => {
        At(accept, options.options);
      });
      const _result = accept._result;
      if (typeof R === "function") {
        const sorted = _result.sort(f151903);
        const method = accept.method;
        let tmp10 = _result;
        if ("all" !== method) {
          tmp10 = _result;
          if ("between" !== method) {
            if ("before" === method) {
              tmp10 = (_result.length && _result[_result.length - 1]) || null;
            } else {
              tmp10 = (_result.length && _result[0]) || null;
            }
          }
        }
        return tmp10;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    rrule(arg0) {
      $t(arg0, this._rrule);
    }
    exrule(arg0) {
      $t(arg0, this._exrule);
    }
    rdate(arg0) {
      Jt(arg0, this._rdate);
    }
    exdate(arg0) {
      Jt(arg0, this._exdate);
    }
    rrules() {
      const _rrule = this._rrule;
      return _rrule.map((item) => Bt(item.toString()));
    }
    exrules() {
      const _exrule = this._exrule;
      return _exrule.map((item) => Bt(item.toString()));
    }
    rdates() {
      const _rdate = this._rdate;
      return _rdate.map((getTime) => {
        date = new Date(getTime.getTime());
        return date;
      });
    }
    exdates() {
      const _exdate = this._exdate;
      return _exdate.map((getTime) => {
        date = new Date(getTime.getTime());
        return date;
      });
    }
    valueOf() {
      const f151896 = function (item) {
        let flag = closure_0;
        const valueOfResult = item.valueOf();
        if (typeof closure_2_33 === "function") {
          if (undefined === flag) {
            flag = true;
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date(valueOfResult);
          const items = [, , , , , , ,];
          const str = date.getUTCFullYear();
          items[0] = closure_2_9(str.toString(), 4, "0");
          items[1] = closure_2_9(date.getUTCMonth() + 1, 2, "0");
          items[2] = closure_2_9(date.getUTCDate(), 2, "0");
          items[3] = "T";
          items[4] = closure_2_9(date.getUTCHours(), 2, "0");
          items[5] = closure_2_9(date.getUTCMinutes(), 2, "0");
          items[6] = closure_2_9(date.getUTCSeconds(), 2, "0");
          let str5 = "";
          if (flag) {
            str5 = "Z";
          }
          items[7] = str5;
          return items.join("");
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      let self = this;
      let closure_0 = [];
      const tmp = !this._rrule.length && self._dtstart;
      if (tmp) {
        obj = { dtstart: self._dtstart };
        closure_0 = closure_0.concat(ct(obj));
      }
      const _rrule = self._rrule;
      const item = _rrule.forEach((item) => {
        const concat = closure_0.concat;
        const str = item.toString();
        closure_0 = concat(str.split("\n"));
      });
      const _exrule = self._exrule;
      const item1 = _exrule.forEach((item) => {
        const concat = closure_0.concat;
        const str = item.toString();
        const parts = str.split("\n");
        const mapped = parts.map((item) => item.replace(/^RRULE:/, "EXRULE:"));
        closure_0 = concat(
          mapped.filter((item) => {
            obj = /^DTSTART/;
            return !obj.test(item);
          }),
        );
      });
      if (self._rdate.length) {
        const _rdate = self._rdate;
        const push = closure_0.push;
        let str = self.tzid();
        closure_0 = undefined;
        let tmp7 = !str;
        if (str) {
          tmp7 = "UTC" === str.toUpperCase();
        }
        closure_0 = tmp7;
        let concat = "".concat;
        let str5 = ":";
        if (tmp7) {
          combined = concat("RDATE", ":");
        } else {
          const combined1 = concat("RDATE", ";TZID=");
          combined = combined1.concat(str, ":");
        }
        let mapped = _rdate.map(f151896);
        const concat2 = "".concat;
        const joined = mapped.join(",");
        const combined2 = "".concat(combined);
        push(combined2.concat(joined));
      }
      if (self._exdate.length) {
        let concat3Result;
        const _exdate = self._exdate;
        const push2 = closure_0.push;
        const str8 = self.tzid();
        closure_0 = undefined;
        let tmp12 = !str8;
        if (str8) {
          tmp12 = "UTC" === str8.toUpperCase();
        }
        closure_0 = tmp12;
        const concat3 = "".concat;
        if (tmp12) {
          concat3Result = concat3("EXDATE", ":");
        } else {
          const concat3Result1 = concat3("EXDATE", ";TZID=");
          concat3Result = concat3Result1.concat(str8, ":");
        }
        const mapped1 = _exdate.map(f151896);
        const concat4 = "".concat;
        const joined1 = mapped1.join(",");
        const combined3 = "".concat(concat3Result);
        push2(combined3.concat(joined1));
      }
      return closure_0;
    }
    toString() {
      const valueOfResult = this.valueOf();
      return valueOfResult.join("\n");
    }
    clone() {
      const self = this;
      const _cache = this._cache;
      obj = Object.create(length.prototype);
      const tmp3 = closure_0.call(obj, {}, _cache) || obj;
      tmp3.dtstart = Gt.apply(tmp3, ["dtstart"]);
      tmp3.tzid = Gt.apply(tmp3, ["tzid"]);
      tmp3._rrule = [];
      tmp3._rdate = [];
      tmp3._exrule = [];
      tmp3._exdate = [];
      closure_0 = tmp3;
      const _rrule = self._rrule;
      const item = _rrule.forEach((clone) => closure_0.rrule(clone.clone()));
      const _exrule = self._exrule;
      const item1 = _exrule.forEach((clone) => closure_0.exrule(clone.clone()));
      const _rdate = self._rdate;
      const item2 = _rdate.forEach((getTime) => {
        const rdate = closure_0.rdate;
        date = new Date(getTime.getTime());
        return rdate(date);
      });
      const _exdate = self._exdate;
      const item3 = _exdate.forEach((getTime) => {
        const exdate = closure_0.exdate;
        date = new Date(getTime.getTime());
        return exdate(date);
      });
      return tmp3;
    }
  }
  class n {
    constructor() {
      this.constructor = tmp73;
    }
  }
  let tmp5 = fn(e, tmp4);
  n.prototype = tmp4.prototype;
  let obj4 = Object.create(n.prototype);
  obj4.constructor = e;
  e.prototype = obj4;
  let obj5 = {
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    tokens: {
      SKIP: /^[ \r\n\t]+|^\.$/,
      number: /^[1-9][0-9]*/,
      numberAsText: /^(one|two|three)/i,
      every: /^every/i,
      "day(s)": /^days?/i,
      "weekday(s)": /^weekdays?/i,
      "week(s)": /^weeks?/i,
      "hour(s)": /^hours?/i,
      "minute(s)": /^minutes?/i,
      "month(s)": /^months?/i,
      "year(s)": /^years?/i,
      on: /^(on|in)/i,
      at: /^(at)/i,
      the: /^the/i,
      first: /^first/i,
      second: /^second/i,
      third: /^third/i,
      nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
      last: /^last/i,
      for: /^for/i,
      "time(s)": /^times?/i,
      until: /^(un)?til/i,
      monday: /^mo(n(day)?)?/i,
      tuesday: /^tu(e(s(day)?)?)?/i,
      wednesday: /^we(d(n(esday)?)?)?/i,
      thursday: /^th(u(r(sday)?)?)?/i,
      friday: /^fr(i(day)?)?/i,
      saturday: /^sa(t(urday)?)?/i,
      sunday: /^su(n(day)?)?/i,
      january: /^jan(uary)?/i,
      february: /^feb(ruary)?/i,
      march: /^mar(ch)?/i,
      april: /^apr(il)?/i,
      may: /^may/i,
      june: /^june?/i,
      july: /^july?/i,
      august: /^aug(ust)?/i,
      september: /^sep(t(ember)?)?/i,
      october: /^oct(ober)?/i,
      november: /^nov(ember)?/i,
      december: /^dec(ember)?/i,
      comma: /^(,\s*|(and|or)\s*)+/i,
    },
  };
  function z(arg0, arg1) {}
  function K(arg0) {
    return arg0.toString();
  }
  function B(arg0, arg1, arg2) {
    combined = "".concat(arg1, " ");
    const combined1 = combined.concat(arg2, ", ");
    return combined1.concat(arg0);
  }
  let closure_45 = tmp7;
  let closure_46 = tmp8;
  const obj6 = { YEARLY: 0, MONTHLY: 1, WEEKLY: 2, DAILY: 3, HOURLY: 4, MINUTELY: 5, SECONDLY: 6 };
  obj6[0] = "YEARLY";
  obj6[1] = "MONTHLY";
  obj6[2] = "WEEKLY";
  obj6[3] = "DAILY";
  obj6[4] = "HOURLY";
  obj6[5] = "MINUTELY";
  obj6[6] = "SECONDLY";
  let items = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
  tmp7.IMPLEMENTED = [];
  tmp7.IMPLEMENTED[obj6.HOURLY] = items;
  tmp7.IMPLEMENTED[obj6.MINUTELY] = items;
  let items1 = ["byhour"];
  tmp7.IMPLEMENTED[obj6.DAILY] = items1.concat(items);
  tmp7.IMPLEMENTED[obj6.WEEKLY] = items;
  tmp7.IMPLEMENTED[obj6.MONTHLY] = items;
  let items2 = ["byweekno", "byyearday"];
  tmp7.IMPLEMENTED[obj6.YEARLY] = items2.concat(items);
  const isFullyConvertible = tmp7.isFullyConvertible;
  let closure_49 = tmp9;
  closure_0 = tmp10;
  let tmp12 = fn(tmp10, tmp9);
  tmp11.prototype = tmp9.prototype;
  let obj7 = Object.create(tmp11.prototype);
  obj7.constructor = tmp10;
  tmp10.prototype = obj7;
  let closure_50 = tmp10;
  const obj8 = {
    get() {
      const tzid = this.tzid;
      let tmp = !tzid;
      if (tzid) {
        const str = this.tzid;
        tmp = "UTC" === str.toUpperCase();
      }
      return tmp;
    },
    enumerable: false,
    configurable: true,
  };
  let definePropertyResult = Object.defineProperty(tmp14.prototype, "isUTC", obj8);
  let rangeError = tmp14;
  let closure_57 = tmp16;
  let items3 = [];
  let num = 0;
  let num2 = 0;
  if (isArray(1)) {
    do {
      let items4 = [];
      items3[num2] = items4.concat(1);
      num2 = num2 + 1;
    } while (num2 < 31);
  } else {
    do {
      items3[num] = 1;
      num = num + 1;
    } while (num < 31);
  }
  let fn2 = function q(fn2Result, fnResult3, arg2) {
    let callResult1;
    let tmp4;
    const tmp = arg2;
    if (tmp) {
      let num4 = 0;
      if (0 < fnResult3.length) {
        do {
          let tmp5 = !tmp4;
          let tmp7 = tmp4;
          if (!tmp7) {
            tmp5 = num4 in fnResult3;
          }
          let tmp8 = tmp4;
          if (!tmp5) {
            let callResult = tmp4;
            if (!callResult) {
              let _Array = Array;
              callResult = slice.call(fnResult3, 0, num4);
            }
            callResult[num4] = fnResult3[num4];
            tmp8 = callResult;
          }
          num4 = num4 + 1;
          tmp4 = tmp8;
          callResult1 = tmp8;
        } while (num4 < fnResult3.length);
      }
    }
    const concat = fn2Result.concat;
    if (!callResult1) {
      const _Array2 = Array;
      const slice2 = Array.prototype.slice;
      callResult1 = slice2.call(fnResult3);
    }
    return concat(callResult1);
  };
  let items5 = [];
  const fn2Result = fn2([], items3, true);
  let num3 = 0;
  let num4 = 0;
  if (isArray(2)) {
    do {
      let items6 = [];
      items5[num4] = items6.concat(2);
      num4 = num4 + 1;
    } while (num4 < 28);
  } else {
    do {
      items5[num3] = 2;
      num3 = num3 + 1;
    } while (num3 < 28);
  }
  let items7 = [];
  let num5 = 0;
  let num6 = 0;
  const fn2Result1 = fn2(fn2Result, items5, true);
  if (isArray(3)) {
    do {
      let items8 = [];
      items7[num6] = items8.concat(3);
      num6 = num6 + 1;
    } while (num6 < 31);
  } else {
    do {
      items7[num5] = 3;
      num5 = num5 + 1;
    } while (num5 < 31);
  }
  const items9 = [];
  let num7 = 0;
  let num8 = 0;
  const fn2Result2 = fn2(fn2Result1, items7, true);
  if (isArray(4)) {
    do {
      let items10 = [];
      items9[num8] = items10.concat(4);
      num8 = num8 + 1;
    } while (num8 < 30);
  } else {
    do {
      items9[num7] = 4;
      num7 = num7 + 1;
    } while (num7 < 30);
  }
  const items11 = [];
  let num9 = 0;
  let num10 = 0;
  const fn2Result3 = fn2(fn2Result2, items9, true);
  if (isArray(5)) {
    do {
      let items12 = [];
      items11[num10] = items12.concat(5);
      num10 = num10 + 1;
    } while (num10 < 31);
  } else {
    do {
      items11[num9] = 5;
      num9 = num9 + 1;
    } while (num9 < 31);
  }
  const items13 = [];
  let num11 = 0;
  let num12 = 0;
  const fn2Result4 = fn2(fn2Result3, items11, true);
  if (isArray(6)) {
    do {
      let items14 = [];
      items13[num12] = items14.concat(6);
      num12 = num12 + 1;
    } while (num12 < 30);
  } else {
    do {
      items13[num11] = 6;
      num11 = num11 + 1;
    } while (num11 < 30);
  }
  const items15 = [];
  let num13 = 0;
  let num14 = 0;
  const fn2Result5 = fn2(fn2Result4, items13, true);
  if (isArray(7)) {
    do {
      let items16 = [];
      items15[num14] = items16.concat(7);
      num14 = num14 + 1;
    } while (num14 < 31);
  } else {
    do {
      items15[num13] = 7;
      num13 = num13 + 1;
    } while (num13 < 31);
  }
  const items17 = [];
  let num15 = 0;
  let num16 = 0;
  const fn2Result6 = fn2(fn2Result5, items15, true);
  if (isArray(8)) {
    do {
      let items18 = [];
      items17[num16] = items18.concat(8);
      num16 = num16 + 1;
    } while (num16 < 31);
  } else {
    do {
      items17[num15] = 8;
      num15 = num15 + 1;
    } while (num15 < 31);
  }
  const items19 = [];
  let num17 = 0;
  let num18 = 0;
  const fn2Result7 = fn2(fn2Result6, items17, true);
  if (isArray(9)) {
    do {
      let items20 = [];
      items19[num18] = items20.concat(9);
      num18 = num18 + 1;
    } while (num18 < 30);
  } else {
    do {
      items19[num17] = 9;
      num17 = num17 + 1;
    } while (num17 < 30);
  }
  const items21 = [];
  let num19 = 0;
  let num20 = 0;
  const fn2Result8 = fn2(fn2Result7, items19, true);
  if (isArray(10)) {
    do {
      let items22 = [];
      items21[num20] = items22.concat(10);
      num20 = num20 + 1;
    } while (num20 < 31);
  } else {
    do {
      items21[num19] = 10;
      num19 = num19 + 1;
    } while (num19 < 31);
  }
  const items23 = [];
  let num21 = 0;
  let num22 = 0;
  const fn2Result9 = fn2(fn2Result8, items21, true);
  if (isArray(11)) {
    do {
      let items24 = [];
      items23[num22] = items24.concat(11);
      num22 = num22 + 1;
    } while (num22 < 30);
  } else {
    do {
      items23[num21] = 11;
      num21 = num21 + 1;
    } while (num21 < 30);
  }
  const items25 = [];
  let num23 = 0;
  let num24 = 0;
  const fn2Result10 = fn2(fn2Result9, items23, true);
  if (isArray(12)) {
    do {
      let items26 = [];
      items25[num24] = items26.concat(12);
      num24 = num24 + 1;
    } while (num24 < 31);
  } else {
    do {
      items25[num23] = 12;
      num23 = num23 + 1;
    } while (num23 < 31);
  }
  const items27 = [];
  let num25 = 0;
  let num26 = 0;
  const fn2Result11 = fn2(fn2Result10, items25, true);
  if (isArray(1)) {
    do {
      let items28 = [];
      items27[num26] = items28.concat(1);
      num26 = num26 + 1;
    } while (num26 < 7);
  } else {
    do {
      items27[num25] = 1;
      num25 = num25 + 1;
    } while (num25 < 7);
  }
  mmask = fn2(fn2Result11, items27, true);
  const items29 = [];
  let num27 = 0;
  let num28 = 0;
  if (isArray(1)) {
    do {
      let items30 = [];
      items29[num28] = items30.concat(1);
      num28 = num28 + 1;
    } while (num28 < 31);
  } else {
    do {
      items29[num27] = 1;
      num27 = num27 + 1;
    } while (num27 < 31);
  }
  const items31 = [];
  let num29 = 0;
  let num30 = 0;
  const fn2Result12 = fn2([], items29, true);
  if (isArray(2)) {
    do {
      let items32 = [];
      items31[num30] = items32.concat(2);
      num30 = num30 + 1;
    } while (num30 < 29);
  } else {
    do {
      items31[num29] = 2;
      num29 = num29 + 1;
    } while (num29 < 29);
  }
  const items33 = [];
  let num31 = 0;
  let num32 = 0;
  const fn2Result13 = fn2(fn2Result12, items31, true);
  if (isArray(3)) {
    do {
      let items34 = [];
      items33[num32] = items34.concat(3);
      num32 = num32 + 1;
    } while (num32 < 31);
  } else {
    do {
      items33[num31] = 3;
      num31 = num31 + 1;
    } while (num31 < 31);
  }
  const items35 = [];
  let num33 = 0;
  let num34 = 0;
  const fn2Result14 = fn2(fn2Result13, items33, true);
  if (isArray(4)) {
    do {
      let items36 = [];
      items35[num34] = items36.concat(4);
      num34 = num34 + 1;
    } while (num34 < 30);
  } else {
    do {
      items35[num33] = 4;
      num33 = num33 + 1;
    } while (num33 < 30);
  }
  const items37 = [];
  let num35 = 0;
  let num36 = 0;
  const fn2Result15 = fn2(fn2Result14, items35, true);
  if (isArray(5)) {
    do {
      let items38 = [];
      items37[num36] = items38.concat(5);
      num36 = num36 + 1;
    } while (num36 < 31);
  } else {
    do {
      items37[num35] = 5;
      num35 = num35 + 1;
    } while (num35 < 31);
  }
  const items39 = [];
  let num37 = 0;
  let num38 = 0;
  const fn2Result16 = fn2(fn2Result15, items37, true);
  if (isArray(6)) {
    do {
      let items40 = [];
      items39[num38] = items40.concat(6);
      num38 = num38 + 1;
    } while (num38 < 30);
  } else {
    do {
      items39[num37] = 6;
      num37 = num37 + 1;
    } while (num37 < 30);
  }
  const items41 = [];
  let num39 = 0;
  let num40 = 0;
  const fn2Result17 = fn2(fn2Result16, items39, true);
  if (isArray(7)) {
    do {
      let items42 = [];
      items41[num40] = items42.concat(7);
      num40 = num40 + 1;
    } while (num40 < 31);
  } else {
    do {
      items41[num39] = 7;
      num39 = num39 + 1;
    } while (num39 < 31);
  }
  const items43 = [];
  let num41 = 0;
  let num42 = 0;
  const fn2Result18 = fn2(fn2Result17, items41, true);
  if (isArray(8)) {
    do {
      let items44 = [];
      items43[num42] = items44.concat(8);
      num42 = num42 + 1;
    } while (num42 < 31);
  } else {
    do {
      items43[num41] = 8;
      num41 = num41 + 1;
    } while (num41 < 31);
  }
  const items45 = [];
  let num43 = 0;
  let num44 = 0;
  const fn2Result19 = fn2(fn2Result18, items43, true);
  if (isArray(9)) {
    do {
      let items46 = [];
      items45[num44] = items46.concat(9);
      num44 = num44 + 1;
    } while (num44 < 30);
  } else {
    do {
      items45[num43] = 9;
      num43 = num43 + 1;
    } while (num43 < 30);
  }
  const items47 = [];
  let num45 = 0;
  let num46 = 0;
  const fn2Result20 = fn2(fn2Result19, items45, true);
  if (isArray(10)) {
    do {
      let items48 = [];
      items47[num46] = items48.concat(10);
      num46 = num46 + 1;
    } while (num46 < 31);
  } else {
    do {
      items47[num45] = 10;
      num45 = num45 + 1;
    } while (num45 < 31);
  }
  const items49 = [];
  let num47 = 0;
  let num48 = 0;
  const fn2Result21 = fn2(fn2Result20, items47, true);
  if (isArray(11)) {
    do {
      let items50 = [];
      items49[num48] = items50.concat(11);
      num48 = num48 + 1;
    } while (num48 < 30);
  } else {
    do {
      items49[num47] = 11;
      num47 = num47 + 1;
    } while (num47 < 30);
  }
  const items51 = [];
  let num49 = 0;
  let num50 = 0;
  const fn2Result22 = fn2(fn2Result21, items49, true);
  if (isArray(12)) {
    do {
      let items52 = [];
      items51[num50] = items52.concat(12);
      num50 = num50 + 1;
    } while (num50 < 31);
  } else {
    do {
      items51[num49] = 12;
      num49 = num49 + 1;
    } while (num49 < 31);
  }
  const items53 = [];
  let num51 = 0;
  let num52 = 0;
  const fn2Result23 = fn2(fn2Result22, items51, true);
  if (isArray(1)) {
    do {
      let items54 = [];
      items53[num52] = items54.concat(1);
      num52 = num52 + 1;
    } while (num52 < 7);
  } else {
    do {
      items53[num51] = 1;
      num51 = num51 + 1;
    } while (num51 < 7);
  }
  mmask2 = fn2(fn2Result23, items53, true);
  const fnResult = fn(1, 29);
  const fnResult1 = fn(1, 30);
  const fnResult2 = fn(1, 31);
  const fnResult3 = fn(1, 32);
  const fn2Result24 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2([], fnResult3, true), fnResult1, true), fnResult3, true), fnResult2, true),
                  fnResult3,
                  true,
                ),
                fnResult2,
                true,
              ),
              fnResult3,
              true,
            ),
            fnResult3,
            true,
          ),
          fnResult2,
          true,
        ),
        fnResult3,
        true,
      ),
      fnResult2,
      true,
    ),
    fnResult3,
    true,
  );
  mdaymask = fn2(fn2Result24, fnResult3.slice(0, 7), true);
  const fn2Result25 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2([], fnResult3, true), fnResult, true), fnResult3, true), fnResult2, true),
                  fnResult3,
                  true,
                ),
                fnResult2,
                true,
              ),
              fnResult3,
              true,
            ),
            fnResult3,
            true,
          ),
          fnResult2,
          true,
        ),
        fnResult3,
        true,
      ),
      fnResult2,
      true,
    ),
    fnResult3,
    true,
  );
  mdaymask2 = fn2(fn2Result25, fnResult3.slice(0, 7), true);
  const fnResult4 = fn(-28, 0);
  const fnResult5 = fn(-29, 0);
  const fnResult6 = fn(-30, 0);
  const fnResult7 = fn(-31, 0);
  const fn2Result26 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2([], fnResult7, true), fnResult5, true), fnResult7, true), fnResult6, true),
                  fnResult7,
                  true,
                ),
                fnResult6,
                true,
              ),
              fnResult7,
              true,
            ),
            fnResult7,
            true,
          ),
          fnResult6,
          true,
        ),
        fnResult7,
        true,
      ),
      fnResult6,
      true,
    ),
    fnResult7,
    true,
  );
  nmdaymask = fn2(fn2Result26, fnResult7.slice(0, 7), true);
  const fn2Result27 = fn2(
    fn2(
      fn2(
        fn2(
          fn2(
            fn2(
              fn2(
                fn2(
                  fn2(fn2(fn2(fn2([], fnResult7, true), fnResult4, true), fnResult7, true), fnResult6, true),
                  fnResult7,
                  true,
                ),
                fnResult6,
                true,
              ),
              fnResult7,
              true,
            ),
            fnResult7,
            true,
          ),
          fnResult6,
          true,
        ),
        fnResult7,
        true,
      ),
      fnResult6,
      true,
    ),
    fnResult7,
    true,
  );
  nmdaymask2 = fn2(fn2Result27, fnResult7.slice(0, 7), true);
  mrange = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  mrange2 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  let items55 = [];
  let num53 = 0;
  do {
    let combined = items55.concat(fn(7));
    num53 = num53 + 1;
    items55 = combined;
  } while (num53 < 55);
  function ot(str) {
    const parts = str.split("\n");
    const mapped = parts.map(st);
    const found = mapped.filter((item) => null !== item);
    return obj(obj({}, found[0]), found[1]);
  }
  const obj9 = {
    get() {
      let lastyear = null;
      if (this.monthinfo) {
        lastyear = this.monthinfo.lastyear;
      }
      return lastyear;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "lastyear", obj9);
  const obj10 = {
    get() {
      let lastmonth = null;
      if (this.monthinfo) {
        lastmonth = this.monthinfo.lastmonth;
      }
      return lastmonth;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "lastmonth", obj10);
  const obj11 = {
    get() {
      return this.yearinfo.yearlen;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "yearlen", obj11);
  const obj12 = {
    get() {
      return this.yearinfo.yearordinal;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "yearordinal", obj12);
  const obj13 = {
    get() {
      return this.yearinfo.mrange;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "mrange", obj13);
  const obj14 = {
    get() {
      return this.yearinfo.wdaymask;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "wdaymask", obj14);
  const obj15 = {
    get() {
      return this.yearinfo.mmask;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "mmask", obj15);
  const obj16 = {
    get() {
      return this.yearinfo.wnomask;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "wnomask", obj16);
  const obj17 = {
    get() {
      let nwdaymask;
      if (this.monthinfo) {
        nwdaymask = this.monthinfo.nwdaymask;
      } else {
        nwdaymask = [];
      }
      return nwdaymask;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "nwdaymask", obj17);
  const obj18 = {
    get() {
      return this.yearinfo.nextyearlen;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "nextyearlen", obj18);
  const obj19 = {
    get() {
      return this.yearinfo.mdaymask;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "mdaymask", obj19);
  const obj20 = {
    get() {
      return this.yearinfo.nmdaymask;
    },
    enumerable: false,
    configurable: true,
  };
  Object.defineProperty(tmp52.prototype, "nmdaymask", obj20);
  let closure_67 = tmp52;
  const obj49 = {
    MO: { weekday: 0, n: undefined },
    TU: { weekday: 1, n: undefined },
    WE: { weekday: 2, n: undefined },
    TH: { weekday: 3, n: undefined },
    FR: { weekday: 4, n: undefined },
    SA: { weekday: 5, n: undefined },
    SU: { weekday: 6, n: undefined },
  };
  Object.create(t.prototype);
  Object.create(t.prototype);
  Object.create(t.prototype);
  Object.create(t.prototype);
  Object.create(t.prototype);
  Object.create(t.prototype);
  Object.create(t.prototype);
  const obj57 = {
    freq: obj6.YEARLY,
    dtstart: null,
    interval: 1,
    wkst: obj49.MO,
    count: null,
    until: null,
    tzid: null,
    bysetpos: null,
    bymonth: null,
    bymonthday: null,
    bynmonthday: null,
    byyearday: null,
    byweekno: null,
    byweekday: null,
    bynweekday: null,
    byhour: null,
    byminute: null,
    bysecond: null,
    byeaster: null,
  };
  let closure_71 = Object.keys(obj57);
  tmp72.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"];
  ({
    YEARLY: tmp72.YEARLY,
    MONTHLY: tmp72.MONTHLY,
    WEEKLY: tmp72.WEEKLY,
    DAILY: tmp72.DAILY,
    HOURLY: tmp72.HOURLY,
    MINUTELY: tmp72.MINUTELY,
    SECONDLY: tmp72.SECONDLY,
  } = obj6);
  ({ MO: tmp72.MO, TU: tmp72.TU, WE: tmp72.WE, TH: tmp72.TH, FR: tmp72.FR, SA: tmp72.SA, SU: tmp72.SU } = obj49);
  tmp72.parseString = ot;
  tmp72.optionsToString = ct;
  constants = tmp72;
  let closure_73 = { dtstart: null, cache: false, unfold: false, forceset: false, compatible: false, tzid: null };
  length = tmp73;
  closure_0 = tmp73;
  let tmp75 = fn(tmp73, tmp72);
  tmp74.prototype = tmp72.prototype;
  const obj58 = Object.create(tmp74.prototype);
  obj58.constructor = tmp73;
  tmp73.prototype = obj58;
  let closure_76 = tmp73;
  return obj2;
};
if (typeof exports === "object") {
  if (typeof module === "object") {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
if (typeof exports === "object") {
  exports.rrule = fn();
} else {
  self.rrule = fn();
}
