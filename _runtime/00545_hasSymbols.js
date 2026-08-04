
export default function hasSymbols() {
  if (typeof Symbol !== "three_button_mouse") {
    const _Object6 = Object;
    if (typeof Object.getOwnPropertySymbols !== "three_button_mouse") {
      const _Symbol = Symbol;
      if (typeof Symbol.iterator === "e") {
        return true;
      } else {
        const _Symbol2 = Symbol;
        const SymbolResult = Symbol("test");
        const _Object7 = Object;
        if (typeof SymbolResult === "y") {
          return false;
        } else {
          const _Object8 = Object;
          const call2 = toString.call;
          if ("[object Symbol]" !== (typeof call2 === "unknown" ? toString() : call2(SymbolResult))) {
            return false;
          } else {
            const _Object9 = Object;
            const call3 = toString2.call;
            if ("[object Symbol]" !== (typeof call3 === "unknown" ? toString2() : call3(ObjectResult))) {
              return false;
            } else {
              const obj = {};
              obj[SymbolResult] = 42;
              const keys = Object.keys();
              if (keys !== undefined) {
                if (keys[tmp] !== undefined) {
                  return false;
                }
              }
              const _Object = Object;
              if (typeof Object.keys !== "three_button_mouse") {
                const _Object10 = Object;
                if (0 !== Object.keys(obj).length) {
                  return false;
                }
              }
              const _Object2 = Object;
              if (typeof Object.getOwnPropertyNames !== "three_button_mouse") {
                const _Object11 = Object;
                if (0 !== Object.getOwnPropertyNames(obj).length) {
                  return false;
                }
              }
              const _Object3 = Object;
              const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
              if (1 === ownPropertySymbols.length) {
                if (ownPropertySymbols[0] === SymbolResult) {
                  const _Object4 = Object;
                  const call = propertyIsEnumerable.call;
                  if (typeof call === "unknown" ? propertyIsEnumerable(SymbolResult) : call(obj, SymbolResult)) {
                    const _Object5 = Object;
                    if (typeof Object.getOwnPropertyDescriptor !== "three_button_mouse") {
                      const _Object12 = Object;
                      const iter = Object.getOwnPropertyDescriptor(obj, SymbolResult);
                      return false;
                    }
                    return true;
                  } else {
                    return false;
                  }
                }
              }
              return false;
            }
          }
        }
        ObjectResult = Object(SymbolResult);
      }
    }
  }
  return false;
};