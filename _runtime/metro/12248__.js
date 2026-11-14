// _runtime/metro/12248__.js
import _validateAsync from "../12163__validateAsync.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";

const self = this;
let closure_4 = ["_cachedInner"];
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.visit = function visit(_zod, fn) {
      closure_0 = fn;
      function run(_zod) {
        closure_0 = _zod;
        value = map.get(_zod);
        if (value === closure_1_8) {
          const obj2 = {
            type: "lazy",
            getter() {
                return dependencyMap.get(closure_0);
              }
          };
          ZodLazy = new ZodLazy.$ZodLazy(obj2);
          return ZodLazy;
        } else if (undefined !== value) {
          return value;
        } else {
          const result = map.set(_zod, tmp2);
          const tmp4 = (function mapInner(_zod) {
            let def = _zod._zod.def;
            switch (def.type) {
              case "object":
                let shape = def.shape;
                let _Object = Object;
                let keys = Object.keys(shape);
                let flag3 = false;
                let obj2 = {};
                let iter3 = keys[Symbol.iterator]();
                let nextResult = iter3.next();
                while (iter3 !== undefined) {
                  let tmp108 = nextResult;
                  let tmp110 = closure_3(shape[nextResult]);
                  let tmp111 = tmp110;
                  if (tmp110 !== shape[nextResult]) {
                    flag3 = true;
                  }
                  obj2[tmp108] = tmp111;
                  continue;
                }
                ({ catchall, catchall: catchall2 } = def);
                if (catchall2) {
                  let tmp115 = closure_3(def.catchall);
                  catchall2 = tmp115 !== def.catchall;
                  catchall = tmp115;
                }
                if (catchall2) {
                  flag3 = true;
                }
                let cloneResult = _zod;
                if (flag3) {
                  let obj3 = {};
                  let merged = Object.assign(def);
                  obj3.shape = obj2;
                  obj3.catchall = catchall;
                  cloneResult = closure_0(dependencyMap[2]).clone(_zod, obj3);
                }
                return cloneResult;
              case "array":
                let tmp95 = closure_3(def.element);
                let cloneResult1 = _zod;
                if (tmp95 !== def.element) {
                  let obj5 = {};
                  let merged1 = Object.assign(def);
                  obj5.element = tmp95;
                  cloneResult1 = closure_0(dependencyMap[2]).clone(_zod, obj5);
                }
                return cloneResult1;
              case "tuple":
                let items = def.items;
                let flag2 = false;
                let items1 = [];
                let iter2 = items[Symbol.iterator]();
                let nextResult1 = iter2.next();
                while (iter2 !== undefined) {
                  let tmp81 = closure_3(nextResult1);
                  let tmp82 = tmp81;
                  if (tmp81 !== nextResult1) {
                    flag2 = true;
                  }
                  let arr = items1.push(tmp82);
                  continue;
                }
                ({ rest, rest: rest2 } = def);
                if (rest2) {
                  let tmp86 = closure_3(def.rest);
                  rest2 = tmp86 !== def.rest;
                  rest = tmp86;
                }
                if (rest2) {
                  flag2 = true;
                }
                let cloneResult2 = _zod;
                if (flag2) {
                  let obj6 = {};
                  let merged2 = Object.assign(def);
                  obj6.items = items1;
                  obj6.rest = rest;
                  cloneResult2 = closure_0(dependencyMap[2]).clone(_zod, obj6);
                }
                return cloneResult2;
              case "record":
                let tmp68 = closure_3(def.keyType);
                let tmp69 = closure_3(def.valueType);
                if (tmp68 !== def.keyType) {
                  let obj9 = closure_0(dependencyMap[2]);
                  let obj7 = {};
                  let merged3 = Object.assign(def);
                  obj7.keyType = tmp68;
                  obj7.valueType = tmp69;
                  let cloneResult3 = obj9.clone(_zod, obj7);
                } else {
                  cloneResult3 = _zod;
                }
                return cloneResult3;
              case "map":
                tmp68 = closure_3(def.keyType);
                tmp69 = closure_3(def.valueType);
                if (tmp68 !== def.keyType) {
                  obj9 = closure_0(dependencyMap[2]);
                  obj7 = {};
                  merged3 = Object.assign(def);
                  obj7.keyType = tmp68;
                  obj7.valueType = tmp69;
                  cloneResult3 = obj9.clone(_zod, obj7);
                } else {
                  cloneResult3 = _zod;
                }
                return cloneResult3;
              case "set":
                let tmp60 = closure_3(def.valueType);
                let cloneResult4 = _zod;
                if (tmp60 !== def.valueType) {
                  let obj8 = {};
                  let merged4 = Object.assign(def);
                  obj8.valueType = tmp60;
                  cloneResult4 = closure_0(dependencyMap[2]).clone(_zod, obj8);
                }
                return cloneResult4;
              case "union":
                let options = def.options;
                let flag = false;
                let items2 = [];
                let iter = options[Symbol.iterator]();
                let nextResult2 = iter.next();
                while (iter !== undefined) {
                  let tmp48 = closure_3(nextResult2);
                  let tmp49 = tmp48;
                  if (tmp48 !== nextResult2) {
                    flag = true;
                  }
                  let arr2 = items2.push(tmp49);
                  continue;
                }
                let cloneResult5 = _zod;
                if (flag) {
                  let obj10 = {};
                  let merged5 = Object.assign(def);
                  obj10.options = items2;
                  cloneResult5 = closure_0(dependencyMap[2]).clone(_zod, obj10);
                }
                return cloneResult5;
              case "intersection":
                let tmp35 = closure_3(def.left);
                if (tmp35 !== def.left) {
                  let obj11 = {};
                  let merged6 = Object.assign(def);
                  obj11.left = tmp35;
                  obj11.right = tmp36;
                  let cloneResult6 = closure_0(dependencyMap[2]).clone(_zod, obj11);
                } else {
                  cloneResult6 = _zod;
                }
                return cloneResult6;
              case "optional":
                let tmp27 = closure_3(def.innerType);
                let cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  let obj4 = closure_0(dependencyMap[2]);
                  let obj12 = {};
                  let merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "nullable":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "default":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "prefault":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "catch":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "readonly":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "nonoptional":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "promise":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "success":
                tmp27 = closure_3(def.innerType);
                cloneResult7 = _zod;
                if (tmp27 !== def.innerType) {
                  obj4 = closure_0(dependencyMap[2]);
                  obj12 = {};
                  merged7 = Object.assign(def);
                  obj12.innerType = tmp27;
                  cloneResult7 = obj4.clone(_zod, obj12);
                }
                return cloneResult7;
              case "pipe":
                let tmp18 = closure_3(def.in);
                if (tmp18 !== def.in) {
                  let obj13 = {};
                  let merged8 = Object.assign(def);
                  obj13.in = tmp18;
                  obj13.out = tmp19;
                  let cloneResult8 = closure_0(dependencyMap[2]).clone(_zod, obj13);
                } else {
                  cloneResult8 = _zod;
                }
                return cloneResult8;
              case "function":
                let tmp9 = closure_3(def.input);
                if (tmp9 !== def.input) {
                  let obj14 = {};
                  let merged9 = Object.assign(def);
                  obj14.input = tmp9;
                  obj14.output = tmp10;
                  let cloneResult9 = closure_0(dependencyMap[2]).clone(_zod, obj14);
                } else {
                  cloneResult9 = _zod;
                }
                return cloneResult9;
              case "lazy":
                ({ getter: closure_0, _cachedInner } = def);
                let obj = {};
                let merged10 = Object.assign(closure_1_3(def, closure_1_4));
                obj.getter = function getter() {
                  let tmp = closure_1_0();
                  closure_0 = tmp;
                  ZodLazy = closure_2_2.get(tmp);
                  if (ZodLazy === closure_1_8) {
                    let obj2 = {
                      type: "lazy",
                      getter() {
                          return dependencyMap.get(closure_0);
                        }
                    };
                    ZodLazy = new ZodLazy.$ZodLazy(obj2);
                  } else if (undefined === ZodLazy) {
                    let result = closure_2_2.set(tmp, tmp3);
                    let tmp5 = (function mapInner(_zod) {
                      let def = _zod._zod.def;
                      switch (def.type) {
                        case "object":
                          let shape = def.shape;
                          let _Object = Object;
                          let keys = Object.keys(shape);
                          let flag3 = false;
                          let obj2 = {};
                          let iter3 = keys[Symbol.iterator]();
                          let nextResult = iter3.next();
                          while (iter3 !== undefined) {
                            let tmp108 = nextResult;
                            let tmp110 = closure_3(shape[nextResult]);
                            let tmp111 = tmp110;
                            if (tmp110 !== shape[nextResult]) {
                              flag3 = true;
                            }
                            obj2[tmp108] = tmp111;
                            continue;
                          }
                          ({ catchall, catchall: catchall2 } = def);
                          if (catchall2) {
                            let tmp115 = closure_3(def.catchall);
                            catchall2 = tmp115 !== def.catchall;
                            catchall = tmp115;
                          }
                          if (catchall2) {
                            flag3 = true;
                          }
                          let cloneResult = _zod;
                          if (flag3) {
                            let obj3 = {};
                            let merged = Object.assign(def);
                            obj3.shape = obj2;
                            obj3.catchall = catchall;
                            cloneResult = closure_0(dependencyMap[2]).clone(_zod, obj3);
                          }
                          return cloneResult;
                        case "array":
                          let tmp95 = closure_3(def.element);
                          let cloneResult1 = _zod;
                          if (tmp95 !== def.element) {
                            let obj5 = {};
                            let merged1 = Object.assign(def);
                            obj5.element = tmp95;
                            cloneResult1 = closure_0(dependencyMap[2]).clone(_zod, obj5);
                          }
                          return cloneResult1;
                        case "tuple":
                          let items = def.items;
                          let flag2 = false;
                          let items1 = [];
                          let iter2 = items[Symbol.iterator]();
                          let nextResult1 = iter2.next();
                          while (iter2 !== undefined) {
                            let tmp81 = closure_3(nextResult1);
                            let tmp82 = tmp81;
                            if (tmp81 !== nextResult1) {
                              flag2 = true;
                            }
                            let arr = items1.push(tmp82);
                            continue;
                          }
                          ({ rest, rest: rest2 } = def);
                          if (rest2) {
                            let tmp86 = closure_3(def.rest);
                            rest2 = tmp86 !== def.rest;
                            rest = tmp86;
                          }
                          if (rest2) {
                            flag2 = true;
                          }
                          let cloneResult2 = _zod;
                          if (flag2) {
                            let obj6 = {};
                            let merged2 = Object.assign(def);
                            obj6.items = items1;
                            obj6.rest = rest;
                            cloneResult2 = closure_0(dependencyMap[2]).clone(_zod, obj6);
                          }
                          return cloneResult2;
                        case "record":
                          let tmp68 = closure_3(def.keyType);
                          let tmp69 = closure_3(def.valueType);
                          if (tmp68 !== def.keyType) {
                            let obj9 = closure_0(dependencyMap[2]);
                            let obj7 = {};
                            let merged3 = Object.assign(def);
                            obj7.keyType = tmp68;
                            obj7.valueType = tmp69;
                            let cloneResult3 = obj9.clone(_zod, obj7);
                          } else {
                            cloneResult3 = _zod;
                          }
                          return cloneResult3;
                        case "map":
                          tmp68 = closure_3(def.keyType);
                          tmp69 = closure_3(def.valueType);
                          if (tmp68 !== def.keyType) {
                            obj9 = closure_0(dependencyMap[2]);
                            obj7 = {};
                            merged3 = Object.assign(def);
                            obj7.keyType = tmp68;
                            obj7.valueType = tmp69;
                            cloneResult3 = obj9.clone(_zod, obj7);
                          } else {
                            cloneResult3 = _zod;
                          }
                          return cloneResult3;
                        case "set":
                          let tmp60 = closure_3(def.valueType);
                          let cloneResult4 = _zod;
                          if (tmp60 !== def.valueType) {
                            let obj8 = {};
                            let merged4 = Object.assign(def);
                            obj8.valueType = tmp60;
                            cloneResult4 = closure_0(dependencyMap[2]).clone(_zod, obj8);
                          }
                          return cloneResult4;
                        case "union":
                          let options = def.options;
                          let flag = false;
                          let items2 = [];
                          let iter = options[Symbol.iterator]();
                          let nextResult2 = iter.next();
                          while (iter !== undefined) {
                            let tmp48 = closure_3(nextResult2);
                            let tmp49 = tmp48;
                            if (tmp48 !== nextResult2) {
                              flag = true;
                            }
                            let arr2 = items2.push(tmp49);
                            continue;
                          }
                          let cloneResult5 = _zod;
                          if (flag) {
                            let obj10 = {};
                            let merged5 = Object.assign(def);
                            obj10.options = items2;
                            cloneResult5 = closure_0(dependencyMap[2]).clone(_zod, obj10);
                          }
                          return cloneResult5;
                        case "intersection":
                          let tmp35 = closure_3(def.left);
                          if (tmp35 !== def.left) {
                            let obj11 = {};
                            let merged6 = Object.assign(def);
                            obj11.left = tmp35;
                            obj11.right = tmp36;
                            let cloneResult6 = closure_0(dependencyMap[2]).clone(_zod, obj11);
                          } else {
                            cloneResult6 = _zod;
                          }
                          return cloneResult6;
                        case "optional":
                          let tmp27 = closure_3(def.innerType);
                          let cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            let obj4 = closure_0(dependencyMap[2]);
                            let obj12 = {};
                            let merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "nullable":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "default":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "prefault":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "catch":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "readonly":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "nonoptional":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "promise":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "success":
                          tmp27 = closure_3(def.innerType);
                          cloneResult7 = _zod;
                          if (tmp27 !== def.innerType) {
                            obj4 = closure_0(dependencyMap[2]);
                            obj12 = {};
                            merged7 = Object.assign(def);
                            obj12.innerType = tmp27;
                            cloneResult7 = obj4.clone(_zod, obj12);
                          }
                          return cloneResult7;
                        case "pipe":
                          let tmp18 = closure_3(def.in);
                          if (tmp18 !== def.in) {
                            let obj13 = {};
                            let merged8 = Object.assign(def);
                            obj13.in = tmp18;
                            obj13.out = tmp19;
                            let cloneResult8 = closure_0(dependencyMap[2]).clone(_zod, obj13);
                          } else {
                            cloneResult8 = _zod;
                          }
                          return cloneResult8;
                        case "function":
                          let tmp9 = closure_3(def.input);
                          if (tmp9 !== def.input) {
                            let obj14 = {};
                            let merged9 = Object.assign(def);
                            obj14.input = tmp9;
                            obj14.output = tmp10;
                            let cloneResult9 = closure_0(dependencyMap[2]).clone(_zod, obj14);
                          } else {
                            cloneResult9 = _zod;
                          }
                          return cloneResult9;
                        case "lazy":
                          ({ getter: closure_0, _cachedInner } = def);
                          let obj = {};
                          let merged10 = Object.assign(closure_1_3(def, closure_1_4));
                          obj.getter = function getter() { ... };
                          return closure_0(dependencyMap[2]).clone(_zod, obj);
                        default:
                          return _zod;
                      }
                    })(tmp);
                    let tmp7 = closure_2_1(tmp5, tmp5 !== tmp);
                    let result1 = closure_2_2.set(tmp, tmp7);
                    ZodLazy = tmp7;
                  }
                  return ZodLazy;
                };
                return closure_0(dependencyMap[2]).clone(_zod, obj);
              default:
                return _zod;
            }
          })(_zod);
          const tmp6 = fn(tmp4, tmp4 !== _zod);
          const result1 = map.set(_zod, tmp6);
          return tmp6;
        }
      }
      if (typeof fn !== "function") {
        fn = (arg0, arg1) => {
          let tmpResult = arg0;
          if (closure_0[arg0._zod.def.type]) {
            tmpResult = tmp(arg0, arg1);
          }
          return tmpResult;
        };
      }
      const map = new Map();
      closure_0 = _zod;
      ZodLazy = map.get(_zod);
      if (ZodLazy === closure_8) {
        const obj = {
          type: "lazy",
          getter() {
              return dependencyMap.get(closure_0);
            }
        };
        ZodLazy = new ZodLazy.$ZodLazy(obj);
      } else if (undefined === ZodLazy) {
        let result = map.set(_zod, tmp2);
        let tmp4 = (function mapInner(_zod) {
          let def = _zod._zod.def;
          switch (def.type) {
            case "object":
              let shape = def.shape;
              let _Object = Object;
              let keys = Object.keys(shape);
              let flag3 = false;
              let obj2 = {};
              let iter3 = keys[Symbol.iterator]();
              let nextResult = iter3.next();
              while (iter3 !== undefined) {
                let tmp108 = nextResult;
                let tmp110 = closure_3(shape[nextResult]);
                let tmp111 = tmp110;
                if (tmp110 !== shape[nextResult]) {
                  flag3 = true;
                }
                obj2[tmp108] = tmp111;
                continue;
              }
              ({ catchall, catchall: catchall2 } = def);
              if (catchall2) {
                let tmp115 = closure_3(def.catchall);
                catchall2 = tmp115 !== def.catchall;
                catchall = tmp115;
              }
              if (catchall2) {
                flag3 = true;
              }
              let cloneResult = _zod;
              if (flag3) {
                let obj3 = {};
                let merged = Object.assign(def);
                obj3.shape = obj2;
                obj3.catchall = catchall;
                cloneResult = closure_0(dependencyMap[2]).clone(_zod, obj3);
              }
              return cloneResult;
            case "array":
              let tmp95 = closure_3(def.element);
              let cloneResult1 = _zod;
              if (tmp95 !== def.element) {
                let obj5 = {};
                let merged1 = Object.assign(def);
                obj5.element = tmp95;
                cloneResult1 = closure_0(dependencyMap[2]).clone(_zod, obj5);
              }
              return cloneResult1;
            case "tuple":
              let items = def.items;
              let flag2 = false;
              let items1 = [];
              let iter2 = items[Symbol.iterator]();
              let nextResult1 = iter2.next();
              while (iter2 !== undefined) {
                let tmp81 = closure_3(nextResult1);
                let tmp82 = tmp81;
                if (tmp81 !== nextResult1) {
                  flag2 = true;
                }
                let arr = items1.push(tmp82);
                continue;
              }
              ({ rest, rest: rest2 } = def);
              if (rest2) {
                let tmp86 = closure_3(def.rest);
                rest2 = tmp86 !== def.rest;
                rest = tmp86;
              }
              if (rest2) {
                flag2 = true;
              }
              let cloneResult2 = _zod;
              if (flag2) {
                let obj6 = {};
                let merged2 = Object.assign(def);
                obj6.items = items1;
                obj6.rest = rest;
                cloneResult2 = closure_0(dependencyMap[2]).clone(_zod, obj6);
              }
              return cloneResult2;
            case "record":
              let tmp68 = closure_3(def.keyType);
              let tmp69 = closure_3(def.valueType);
              if (tmp68 !== def.keyType) {
                let obj9 = closure_0(dependencyMap[2]);
                let obj7 = {};
                let merged3 = Object.assign(def);
                obj7.keyType = tmp68;
                obj7.valueType = tmp69;
                let cloneResult3 = obj9.clone(_zod, obj7);
              } else {
                cloneResult3 = _zod;
              }
              return cloneResult3;
            case "map":
              tmp68 = closure_3(def.keyType);
              tmp69 = closure_3(def.valueType);
              if (tmp68 !== def.keyType) {
                obj9 = closure_0(dependencyMap[2]);
                obj7 = {};
                merged3 = Object.assign(def);
                obj7.keyType = tmp68;
                obj7.valueType = tmp69;
                cloneResult3 = obj9.clone(_zod, obj7);
              } else {
                cloneResult3 = _zod;
              }
              return cloneResult3;
            case "set":
              let tmp60 = closure_3(def.valueType);
              let cloneResult4 = _zod;
              if (tmp60 !== def.valueType) {
                let obj8 = {};
                let merged4 = Object.assign(def);
                obj8.valueType = tmp60;
                cloneResult4 = closure_0(dependencyMap[2]).clone(_zod, obj8);
              }
              return cloneResult4;
            case "union":
              let options = def.options;
              let flag = false;
              let items2 = [];
              let iter = options[Symbol.iterator]();
              let nextResult2 = iter.next();
              while (iter !== undefined) {
                let tmp48 = closure_3(nextResult2);
                let tmp49 = tmp48;
                if (tmp48 !== nextResult2) {
                  flag = true;
                }
                let arr2 = items2.push(tmp49);
                continue;
              }
              let cloneResult5 = _zod;
              if (flag) {
                let obj10 = {};
                let merged5 = Object.assign(def);
                obj10.options = items2;
                cloneResult5 = closure_0(dependencyMap[2]).clone(_zod, obj10);
              }
              return cloneResult5;
            case "intersection":
              let tmp35 = closure_3(def.left);
              if (tmp35 !== def.left) {
                let obj11 = {};
                let merged6 = Object.assign(def);
                obj11.left = tmp35;
                obj11.right = tmp36;
                let cloneResult6 = closure_0(dependencyMap[2]).clone(_zod, obj11);
              } else {
                cloneResult6 = _zod;
              }
              return cloneResult6;
            case "optional":
              let tmp27 = closure_3(def.innerType);
              let cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                let obj4 = closure_0(dependencyMap[2]);
                let obj12 = {};
                let merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "nullable":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "default":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "prefault":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "catch":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "readonly":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "nonoptional":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "promise":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "success":
              tmp27 = closure_3(def.innerType);
              cloneResult7 = _zod;
              if (tmp27 !== def.innerType) {
                obj4 = closure_0(dependencyMap[2]);
                obj12 = {};
                merged7 = Object.assign(def);
                obj12.innerType = tmp27;
                cloneResult7 = obj4.clone(_zod, obj12);
              }
              return cloneResult7;
            case "pipe":
              let tmp18 = closure_3(def.in);
              if (tmp18 !== def.in) {
                let obj13 = {};
                let merged8 = Object.assign(def);
                obj13.in = tmp18;
                obj13.out = tmp19;
                let cloneResult8 = closure_0(dependencyMap[2]).clone(_zod, obj13);
              } else {
                cloneResult8 = _zod;
              }
              return cloneResult8;
            case "function":
              let tmp9 = closure_3(def.input);
              if (tmp9 !== def.input) {
                let obj14 = {};
                let merged9 = Object.assign(def);
                obj14.input = tmp9;
                obj14.output = tmp10;
                let cloneResult9 = closure_0(dependencyMap[2]).clone(_zod, obj14);
              } else {
                cloneResult9 = _zod;
              }
              return cloneResult9;
            case "lazy":
              ({ getter: closure_0, _cachedInner } = def);
              let obj = {};
              let merged10 = Object.assign(closure_1_3(def, closure_1_4));
              obj.getter = function getter() {
                let tmp = closure_1_0();
                closure_0 = tmp;
                ZodLazy = closure_2_2.get(tmp);
                if (ZodLazy === closure_1_8) {
                  let obj2 = {
                    type: "lazy",
                    getter() {
                        return dependencyMap.get(closure_0);
                      }
                  };
                  ZodLazy = new ZodLazy.$ZodLazy(obj2);
                } else if (undefined === ZodLazy) {
                  let result = closure_2_2.set(tmp, tmp3);
                  let tmp5 = (function mapInner(_zod) {
                    let def = _zod._zod.def;
                    switch (def.type) {
                      case "object":
                        let shape = def.shape;
                        let _Object = Object;
                        let keys = Object.keys(shape);
                        let flag3 = false;
                        let obj2 = {};
                        let iter3 = keys[Symbol.iterator]();
                        let nextResult = iter3.next();
                        while (iter3 !== undefined) {
                          let tmp108 = nextResult;
                          let tmp110 = closure_3(shape[nextResult]);
                          let tmp111 = tmp110;
                          if (tmp110 !== shape[nextResult]) {
                            flag3 = true;
                          }
                          obj2[tmp108] = tmp111;
                          continue;
                        }
                        ({ catchall, catchall: catchall2 } = def);
                        if (catchall2) {
                          let tmp115 = closure_3(def.catchall);
                          catchall2 = tmp115 !== def.catchall;
                          catchall = tmp115;
                        }
                        if (catchall2) {
                          flag3 = true;
                        }
                        let cloneResult = _zod;
                        if (flag3) {
                          let obj3 = {};
                          let merged = Object.assign(def);
                          obj3.shape = obj2;
                          obj3.catchall = catchall;
                          cloneResult = closure_0(dependencyMap[2]).clone(_zod, obj3);
                        }
                        return cloneResult;
                      case "array":
                        let tmp95 = closure_3(def.element);
                        let cloneResult1 = _zod;
                        if (tmp95 !== def.element) {
                          let obj5 = {};
                          let merged1 = Object.assign(def);
                          obj5.element = tmp95;
                          cloneResult1 = closure_0(dependencyMap[2]).clone(_zod, obj5);
                        }
                        return cloneResult1;
                      case "tuple":
                        let items = def.items;
                        let flag2 = false;
                        let items1 = [];
                        let iter2 = items[Symbol.iterator]();
                        let nextResult1 = iter2.next();
                        while (iter2 !== undefined) {
                          let tmp81 = closure_3(nextResult1);
                          let tmp82 = tmp81;
                          if (tmp81 !== nextResult1) {
                            flag2 = true;
                          }
                          let arr = items1.push(tmp82);
                          continue;
                        }
                        ({ rest, rest: rest2 } = def);
                        if (rest2) {
                          let tmp86 = closure_3(def.rest);
                          rest2 = tmp86 !== def.rest;
                          rest = tmp86;
                        }
                        if (rest2) {
                          flag2 = true;
                        }
                        let cloneResult2 = _zod;
                        if (flag2) {
                          let obj6 = {};
                          let merged2 = Object.assign(def);
                          obj6.items = items1;
                          obj6.rest = rest;
                          cloneResult2 = closure_0(dependencyMap[2]).clone(_zod, obj6);
                        }
                        return cloneResult2;
                      case "record":
                        let tmp68 = closure_3(def.keyType);
                        let tmp69 = closure_3(def.valueType);
                        if (tmp68 !== def.keyType) {
                          let obj9 = closure_0(dependencyMap[2]);
                          let obj7 = {};
                          let merged3 = Object.assign(def);
                          obj7.keyType = tmp68;
                          obj7.valueType = tmp69;
                          let cloneResult3 = obj9.clone(_zod, obj7);
                        } else {
                          cloneResult3 = _zod;
                        }
                        return cloneResult3;
                      case "map":
                        tmp68 = closure_3(def.keyType);
                        tmp69 = closure_3(def.valueType);
                        if (tmp68 !== def.keyType) {
                          obj9 = closure_0(dependencyMap[2]);
                          obj7 = {};
                          merged3 = Object.assign(def);
                          obj7.keyType = tmp68;
                          obj7.valueType = tmp69;
                          cloneResult3 = obj9.clone(_zod, obj7);
                        } else {
                          cloneResult3 = _zod;
                        }
                        return cloneResult3;
                      case "set":
                        let tmp60 = closure_3(def.valueType);
                        let cloneResult4 = _zod;
                        if (tmp60 !== def.valueType) {
                          let obj8 = {};
                          let merged4 = Object.assign(def);
                          obj8.valueType = tmp60;
                          cloneResult4 = closure_0(dependencyMap[2]).clone(_zod, obj8);
                        }
                        return cloneResult4;
                      case "union":
                        let options = def.options;
                        let flag = false;
                        let items2 = [];
                        let iter = options[Symbol.iterator]();
                        let nextResult2 = iter.next();
                        while (iter !== undefined) {
                          let tmp48 = closure_3(nextResult2);
                          let tmp49 = tmp48;
                          if (tmp48 !== nextResult2) {
                            flag = true;
                          }
                          let arr2 = items2.push(tmp49);
                          continue;
                        }
                        let cloneResult5 = _zod;
                        if (flag) {
                          let obj10 = {};
                          let merged5 = Object.assign(def);
                          obj10.options = items2;
                          cloneResult5 = closure_0(dependencyMap[2]).clone(_zod, obj10);
                        }
                        return cloneResult5;
                      case "intersection":
                        let tmp35 = closure_3(def.left);
                        if (tmp35 !== def.left) {
                          let obj11 = {};
                          let merged6 = Object.assign(def);
                          obj11.left = tmp35;
                          obj11.right = tmp36;
                          let cloneResult6 = closure_0(dependencyMap[2]).clone(_zod, obj11);
                        } else {
                          cloneResult6 = _zod;
                        }
                        return cloneResult6;
                      case "optional":
                        let tmp27 = closure_3(def.innerType);
                        let cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          let obj4 = closure_0(dependencyMap[2]);
                          let obj12 = {};
                          let merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "nullable":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "default":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "prefault":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "catch":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "readonly":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "nonoptional":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "promise":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "success":
                        tmp27 = closure_3(def.innerType);
                        cloneResult7 = _zod;
                        if (tmp27 !== def.innerType) {
                          obj4 = closure_0(dependencyMap[2]);
                          obj12 = {};
                          merged7 = Object.assign(def);
                          obj12.innerType = tmp27;
                          cloneResult7 = obj4.clone(_zod, obj12);
                        }
                        return cloneResult7;
                      case "pipe":
                        let tmp18 = closure_3(def.in);
                        if (tmp18 !== def.in) {
                          let obj13 = {};
                          let merged8 = Object.assign(def);
                          obj13.in = tmp18;
                          obj13.out = tmp19;
                          let cloneResult8 = closure_0(dependencyMap[2]).clone(_zod, obj13);
                        } else {
                          cloneResult8 = _zod;
                        }
                        return cloneResult8;
                      case "function":
                        let tmp9 = closure_3(def.input);
                        if (tmp9 !== def.input) {
                          let obj14 = {};
                          let merged9 = Object.assign(def);
                          obj14.input = tmp9;
                          obj14.output = tmp10;
                          let cloneResult9 = closure_0(dependencyMap[2]).clone(_zod, obj14);
                        } else {
                          cloneResult9 = _zod;
                        }
                        return cloneResult9;
                      case "lazy":
                        ({ getter: closure_0, _cachedInner } = def);
                        let obj = {};
                        let merged10 = Object.assign(closure_1_3(def, closure_1_4));
                        obj.getter = function getter() {
                          let tmp = closure_1_0();
                          closure_0 = tmp;
                          ZodLazy = closure_2_2.get(tmp);
                          if (ZodLazy === closure_1_8) {
                            let obj2 = { type: "lazy", getter() { ... } };
                            ZodLazy = new ZodLazy.$ZodLazy(obj2);
                          } else if (undefined === ZodLazy) {
                            let result = closure_2_2.set(tmp, tmp3);
                            let tmp5 = (function mapInner() { ... })(tmp);
                            let tmp7 = closure_2_1(tmp5, tmp5 !== tmp);
                            let result1 = closure_2_2.set(tmp, tmp7);
                            ZodLazy = tmp7;
                          }
                          return ZodLazy;
                        };
                        return closure_0(dependencyMap[2]).clone(_zod, obj);
                      default:
                        return _zod;
                    }
                  })(tmp);
                  let tmp7 = closure_2_1(tmp5, tmp5 !== tmp);
                  let result1 = closure_2_2.set(tmp, tmp7);
                  ZodLazy = tmp7;
                }
                return ZodLazy;
              };
              return closure_0(dependencyMap[2]).clone(_zod, obj);
            default:
              return _zod;
          }
        })(_zod);
        const fnResult = fn(tmp4, tmp4 !== _zod);
        let result1 = map.set(_zod, fnResult);
        ZodLazy = fnResult;
      }
      return ZodLazy;
    };
    let ZodLazy = fn(_validateAsync);
    const _Symbol = Symbol;
    let closure_8 = Symbol("z.visit/resolving");
    (() => {
      let tmp = exports;
      const ownPropertyNames = Object.getOwnPropertyNames(exports);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = exports;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}