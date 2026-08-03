import { NetworkConnectionTypes } from "ME";
import importDefaultResult from "configure";

function notifyListeners(isConnected) {
  let details;
  let type;
  isConnected = isConnected.isConnected;
  ({ type, details } = isConnected);
  const obj = { type, effectiveSpeed: null, serviceProvider: null };
  let cellularGeneration = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    cellularGeneration = details.cellularGeneration;
  }
  obj[1] = cellularGeneration;
  let carrier = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    carrier = details.carrier;
  }
  obj[2] = carrier;
  let flag = isConnected;
  if (isConnected == null) {
    flag = false;
  }
  obj.log("Network status changed: isConnected:" + isConnected + " type:" + isConnected.type + " speed:" + obj.cellularGeneration);
  const item = isConnected ? closure_4 : closure_5.forEach((arg0) => {
    let flag = isConnected;
    if (isConnected == null) {
      flag = false;
    }
    return arg0(flag, obj);
  });
  const item1 = arr3.forEach((arg0) => arg0(obj));
}
let obj = new require("set")("NetworkUtils");
obj.enableNativeLogger(true);
let closure_4 = [];
let closure_5 = [];
let closure_6 = [];
let c7 = null;
let c8 = false;
let response = require("configure").fetch();
response.then((isConnected) => {
  let flag = isConnected.isConnected;
  if (flag == null) {
    flag = false;
  }
});
obj = {
  addOnlineCallback(_handleNetworkOnline) {
    if (null == closure_7) {
      closure_7 = importDefault(1456).addEventListener(notifyListeners);
      const obj = importDefault(1456);
    }
  },
  removeOnlineCallback(_handleNetworkOnline) {
    const index = arr.indexOf(_handleNetworkOnline);
    if (-1 !== index) {
      arr.splice(index, 1);
      let tmp5 = null != _null;
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr2.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr3.length;
      }
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  addOfflineCallback(_handleNetworkOffline) {
    arr2.push(_handleNetworkOffline);
    if (null == closure_7) {
      closure_7 = importDefault(1456).addEventListener(notifyListeners);
      const obj = importDefault(1456);
    }
  },
  removeOfflineCallback(_handleNetworkOffline) {
    const index = arr2.indexOf(_handleNetworkOffline);
    if (-1 !== index) {
      arr.splice(index, 1);
      let tmp5 = null != _null;
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr3.length;
      }
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  addChangeCallback(handleConnectionInfoChange) {
    arr3.push(handleConnectionInfoChange);
    if (null == closure_7) {
      closure_7 = importDefault(1456).addEventListener(notifyListeners);
      const obj = importDefault(1456);
    }
  },
  removeChangeCallback(arg0) {
    const index = arr3.indexOf(arg0);
    if (-1 !== index) {
      arr.splice(index, 1);
      let tmp5 = null != _null;
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr2.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  getNetworkInformation() {
    const response = importDefault(1456).fetch();
    return response.then((arg0) => {
      let details;
      let type;
      ({ type, details } = arg0);
      const obj = { type, effectiveSpeed: null, serviceProvider: null };
      let cellularGeneration = null;
      if (type === constants.CELLULAR) {
        cellularGeneration = details.cellularGeneration;
      }
      obj[1] = cellularGeneration;
      let carrier = null;
      if (type === constants.CELLULAR) {
        carrier = details.carrier;
      }
      obj[2] = carrier;
      return obj;
    });
  },
  isOnline() {
    return c8;
  }
};
const result = require("configure").fileFinishedImporting("utils/native/NetworkUtils.tsx");

export default obj;