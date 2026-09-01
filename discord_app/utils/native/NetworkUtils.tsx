// discord_app/utils/native/NetworkUtils.tsx
import set from "../../../_runtime/00002_set.js";
import timestampDefault from "../../modules/debug/Logger.tsx";
import ME from "../../Constants.tsx";
import importDefaultResult from "../../../_runtime/01475_configure.js";

function notifyListeners(isConnected) {
  isConnected = isConnected.isConnected;
  ({ type, details } = isConnected);
  obj = { type, effectiveSpeed: null, serviceProvider: null };
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
  obj.log(
    "Network status changed: isConnected:" +
      isConnected +
      " type:" +
      isConnected.type +
      " speed:" +
      obj.cellularGeneration,
  );
  const item = isConnected
    ? closure_4
    : closure_5.forEach((arg0) => {
        flag = isConnected;
        if (isConnected == null) {
          flag = false;
        }
        return arg0(flag, obj);
      });
  const item1 = arr3.forEach((arg0) => arg0(obj));
}
const NetworkConnectionTypes = ME.NetworkConnectionTypes;
let obj = new timestampDefault("NetworkUtils");
obj.enableNativeLogger(true);
let closure_4 = [];
let closure_5 = [];
let closure_6 = [];
let c7 = null;
let c8 = false;
let response = importDefaultResult.fetch();
response.then((isConnected) => {
  let flag = isConnected.isConnected;
  if (flag == null) {
    flag = false;
  }
});
obj = {
  addOnlineCallback(_handleNetworkOnline) {
    if (null == closure_7) {
      closure_7 = importDefaultResult.addEventListener(notifyListeners);
      obj = importDefaultResult;
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
      closure_7 = importDefaultResult.addEventListener(notifyListeners);
      obj = importDefaultResult;
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
      closure_7 = importDefaultResult.addEventListener(notifyListeners);
      obj = importDefaultResult;
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
    const response = importDefaultResult.fetch();
    return response.then((arg0) => {
      ({ type, details } = arg0);
      obj = { type, effectiveSpeed: null, serviceProvider: null };
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
  },
};
const result = set.fileFinishedImporting("utils/native/NetworkUtils.tsx");

export default obj;
