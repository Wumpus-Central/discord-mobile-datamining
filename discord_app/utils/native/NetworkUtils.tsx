// === Module 1469: utils/NetworkUtils ===

// Module 1469 (utils/NetworkUtils)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import configure_mod from "configure" /* 1470 */;
import size from "module_2" /* 2 */;

let _null;

function notifyListeners(isConnected) {
  let carrier;
  let cellularGeneration;
  let details;
  let type;
  isConnected = isConnected.isConnected;
  ({ type, details } = isConnected);
  obj = { type, effectiveSpeed: cellularGeneration, serviceProvider: carrier };
  cellularGeneration = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    cellularGeneration = details.cellularGeneration;
  }
  carrier = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    carrier = details.carrier;
  }
  flag = isConnected;
  const arr = isConnected ? closure_4 : closure_5;
  if (isConnected == null) {
    flag = false;
  }
  obj.log("Network status changed: isConnected:" + isConnected + " type:" + isConnected.type + " speed:" + obj.cellularGeneration);
  const item = arr.forEach((fn) => {
    flag = isConnected;
    if (isConnected == null) {
      flag = false;
    }
    return fn(flag, obj);
  });
  const item1 = closure_6.forEach((fn) => fn(obj));
}
const NetworkConnectionTypes = Constants.NetworkConnectionTypes;
let obj = new LoggerDefault("NetworkUtils");
obj.enableNativeLogger(true);
let closure_4 = [];
let closure_5 = [];
let closure_6 = [];
let c7 = null;
let flag = false;
let configure = configure_mod;
configure = configure.fetch();
configure.then((isConnected) => {
  flag = isConnected.isConnected;
  if (flag == null) {
    flag = false;
  }
});
const obj2 = {
  addOnlineCallback(_handleNetworkOnline) {
    closure_4.push(_handleNetworkOnline);
    if (null == c7) {
      obj = configure;
      c7 = obj.addEventListener(notifyListeners);
    }
  },
  removeOnlineCallback(_handleNetworkOnline) {
    const index = closure_4.indexOf(_handleNetworkOnline);
    if (-1 !== index) {
      closure_4.splice(index, 1);
      const tmp5 = null != _null && 0 === closure_4.length && 0 === closure_5.length && 0 === closure_6.length;
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  addOfflineCallback(_handleNetworkOffline) {
    closure_5.push(_handleNetworkOffline);
    if (null == c7) {
      obj = configure;
      c7 = obj.addEventListener(notifyListeners);
    }
  },
  removeOfflineCallback(_handleNetworkOffline) {
    const index = closure_5.indexOf(_handleNetworkOffline);
    if (-1 !== index) {
      closure_5.splice(index, 1);
      const tmp5 = null != _null && 0 === closure_4.length && 0 === closure_5.length && 0 === closure_6.length;
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  addChangeCallback(handleConnectionInfoChange) {
    closure_6.push(handleConnectionInfoChange);
    if (null == c7) {
      obj = configure;
      c7 = obj.addEventListener(notifyListeners);
    }
  },
  removeChangeCallback(arg0) {
    const index = closure_6.indexOf(arg0);
    if (-1 !== index) {
      closure_6.splice(index, 1);
      const tmp5 = null != _null && 0 === closure_4.length && 0 === closure_5.length && 0 === closure_6.length;
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  getNetworkInformation() {
    obj = configure;
    const response = obj.fetch();
    return response.then((result) => {
      let carrier;
      let cellularGeneration;
      let details;
      let type;
      ({ type, details } = result);
      obj = { type, effectiveSpeed: cellularGeneration, serviceProvider: carrier };
      cellularGeneration = null;
      if (type === constants.CELLULAR) {
        cellularGeneration = details.cellularGeneration;
      }
      carrier = null;
      if (type === constants.CELLULAR) {
        carrier = details.carrier;
      }
      return obj;
    });
  },
  isOnline() {
    return flag;
  }
};
const result = size.fileFinishedImporting("utils/native/NetworkUtils.tsx");

export default obj2;