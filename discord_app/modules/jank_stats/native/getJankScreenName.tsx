// === Module 15973: getJankScreenName ===

// Module 15973 (getJankScreenName)
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import getScreenAnalyticsName from "getScreenAnalyticsName" /* 15975 */;
import JankScreenConstants from "JankScreenConstants" /* 15974 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function resolveScreenName(items) {
  const params = tmp.params;
  if (items[items.length - 1].name === channel) {
    let channelId1;
    if (params != null) {
      channelId1 = params.channelId;
    }
    if (typeof channelId1 === "string") {
      let channelScreenName;
      const channelId = params.channelId;
      if (true === params.showCreateThread) {
        channelScreenName = _false;
      } else if (null != channelId) {
        const obj = getScreenAnalyticsName;
        channelScreenName = obj.getChannelScreenName(channelId);
      } else {
        channelScreenName = React3;
      }
      return channelScreenName;
    }
  }
  const found = items.find((name) => name.name === modal);
  if (null != found) {
    const params2 = found.params;
    let tmp5;
    if (params2 != null) {
      modal = params2.modal;
      if (modal != null) {
        tmp5 = modal.modal;
      }
    }
    let tmp6 = null;
    if (null != tmp5) {
      let render = tmp5.type;
      if (render == null) {
        render = tmp5.render;
      }
      if (render == null) {
        render = tmp5;
      }
      let name = tmp5.displayName;
      if (name == null) {
        name = render.displayName;
      }
      if (name == null) {
        name = render.name;
      }
      let tmp7 = null;
      if (typeof name === "string") {
        tmp7 = null;
        if ("" !== name) {
          tmp7 = name;
        }
      }
      tmp6 = tmp7;
    }
    let combined = null;
    if (null != tmp6) {
      const _HermesInternal = HermesInternal;
      combined = "" + modal + ":" + tmp6;
    }
    if (null != combined) {
      return combined;
    }
  }
  let diff = items.length - 1;
  if (0 <= diff) {
    while (set.has(items[diff].name)) {
      diff = diff - 1;
    }
    let name2 = items[diff].name;
    if ("sidebar" === name2) {
      name2 = React2;
    }
    return name2;
  }
  let name3 = tmp.name;
  if ("sidebar" === name3) {
    name3 = React2;
  }
  return name3;
}
({ CHANNEL_DETAILS_SCREEN: c2, CREATE_THREAD_SCREEN: c3, EMPTY_CHAT_SCREEN: closure_4, SURFACE_SEPARATOR: hasOwnProperty, UNKNOWN_SCREEN: metroRequire } = JankScreenConstants);
const set = new Set(["root"]);
const channel = "channel";
const tabs = "tabs";
let modal = "modal";
const guilds = "guilds";
const result = size.fileFinishedImporting("modules/jank_stats/native/getJankScreenName.tsx");

export default function getJankScreenName() {
  let concat2;
  let focused;
  let items2;
  let mapped;
  let rendered;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let rootState = null;
  if (null != rootNavigationRef) {
    rootState = null;
    if (rootNavigationRef.isReady()) {
      rootState = rootNavigationRef.getRootState();
    }
  }
  const items = [];
  if (null != rootState) {
    while (true) {
      let index = rootState.index;
      let tmp2 = rootState;
      let routes = rootState.routes;
      if (index == null) {
        index = tmp2.routes.length - 1;
      }
      let tmp3 = routes[index];
      if (null == tmp3) {
        break;
      } else {
        let obj5;
        let obj15;
        if (tmp3.name === channel) {
          let items1 = [];
          let tmp5 = tmp2;
          let concat = items.concat;
          if (null != tmp2) {
            while (true) {
              let index2 = tmp5.index;
              let routes2 = tmp5.routes;
              if (index2 == null) {
                index2 = tmp5.routes.length - 1;
              }
              let tmp7 = routes2[index2];
              if (null == tmp7) {
                break;
              } else {
                let obj2 = { name: null, key: null, params: null };
                ({ name: obj4.name, key: obj4.key, params: obj4.params } = tmp7);
                let arr = items1.push(obj2);
                if (null == tmp7.state) {
                  break;
                }
              }
            }
          }
          obj5 = { focused: concat(items1), rendered: concat2(items2) };
          items2 = [];
          concat2 = items.concat;
          if (null != tmp2) {
            while (true) {
              let index3 = tmp2.index;
              let routes3 = tmp2.routes;
              if (index3 == null) {
                index3 = tmp2.routes.length - 1;
              }
              let tmp10 = routes3[index3];
              let name;
              if (tmp10 != null) {
                name = tmp10.name;
              }
              let tmp13 = tmp10;
              if (name === channel) {
                let routes1 = tmp2.routes;
                let found = routes1.find((name) => name.name === tabs);
                if (found == null) {
                  found = tmp10;
                }
                tmp13 = found;
              }
              if (null == tmp13) {
                break;
              } else {
                let obj7 = { name: null, key: null, params: null };
                ({ name: obj6.name, key: obj6.key, params: obj6.params } = tmp13);
                let arr2 = items2.push(obj7);
                if (null == tmp13.state) {
                  break;
                }
              }
            }
          }
        } else {
          let obj8 = { name: null, key: null, params: null };
          ({ name: obj3.name, key: obj3.key, params: obj3.params } = tmp3);
          let arr3 = items.push(obj8);
          if (null != tmp3.state) {
            continue;
          } else {
            break;
          }
          break;
        }
        ({ focused, rendered } = obj5);
        if (0 === focused.length) {
          let obj9 = { screen: metroRequire, expectedScreenIds: "", focusedRoute: "unicodeVersion" };
          obj15 = obj9;
        } else {
          obj15 = { screen: resolveScreenName(focused), expectedScreenIds: mapped.join(","), focusedRoute: focused[focused.length - 1] };
          mapped = rendered.map((key) => key.key);
          let str = ",";
        }
        return obj15;
      }
    }
  }
  obj5 = { focused: items, rendered: items };
};
export const CHAT_PANEL_ROUTE = "channel";
export const getComponentDisplayName = function getComponentDisplayName(type) {
  if (null == type) {
    return null;
  } else {
    let render = type.type;
    if (render == null) {
      render = type.render;
    }
    if (render == null) {
      render = type;
    }
    let name = type.displayName;
    if (name == null) {
      name = render.displayName;
    }
    if (name == null) {
      name = render.name;
    }
    let tmp = null;
    if (typeof name === "string") {
      tmp = null;
      if ("" !== name) {
        tmp = name;
      }
    }
    return tmp;
  }
};
export const getChatPanelScreenName = function getChatPanelScreenName(channelId, showCreateThread) {
  let channelScreenName;
  const tmp = showCreateThread;
  if (tmp) {
    channelScreenName = _false;
  } else if (null != channelId) {
    const obj = getScreenAnalyticsName;
    channelScreenName = obj.getChannelScreenName(channelId);
  } else {
    channelScreenName = React3;
  }
  return channelScreenName;
};
export const getPanelListScreenName = function getPanelListScreenName() {
  let items;
  let tmp10;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let rootState = null;
  if (null != rootNavigationRef) {
    rootState = null;
    if (rootNavigationRef.isReady()) {
      rootState = rootNavigationRef.getRootState();
    }
  }
  if (null == rootState) {
    items = [];
  } else {
    const items1 = [];
    items = items1;
    if (null != rootState) {
      while (true) {
        let index = rootState.index;
        let routes = rootState.routes;
        if (index == null) {
          index = rootState.routes.length - 1;
        }
        let tmp3 = routes[index];
        let name;
        if (tmp3 != null) {
          name = tmp3.name;
        }
        let tmp6 = tmp3;
        if (name === channel) {
          let routes1 = rootState.routes;
          let found = routes1.find((name) => name.name === tabs);
          if (found == null) {
            found = tmp3;
          }
          tmp6 = found;
        }
        items = items1;
        if (null == tmp6) {
          break;
        } else {
          let obj2 = { name: null, key: null, params: null };
          ({ name: obj3.name, key: obj3.key, params: obj3.params } = tmp6);
          let arr = items1.push(obj2);
          items = items1;
          if (null != tmp6.state) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
  }
  if (0 === items.length) {
    tmp10 = metroRequire;
  } else {
    tmp10 = resolveScreenName(items);
  }
  return tmp10;
};
export const getBaseScreenName = function getBaseScreenName() {
  let items;
  let tmp6;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let rootState = null;
  if (null != rootNavigationRef) {
    rootState = null;
    if (rootNavigationRef.isReady()) {
      rootState = rootNavigationRef.getRootState();
    }
  }
  if (null == rootState) {
    items = [];
  } else {
    const items1 = [];
    items = items1;
    if (null != rootState) {
      while (true) {
        let index = rootState.index;
        let routes = rootState.routes;
        if (index == null) {
          index = rootState.routes.length - 1;
        }
        let tmp3 = routes[index];
        items = items1;
        if (null == tmp3) {
          break;
        } else {
          let obj2 = { name: null, key: null, params: null };
          ({ name: obj3.name, key: obj3.key, params: obj3.params } = tmp3);
          let arr = items1.push(obj2);
          items = items1;
          if (null != tmp3.state) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
  }
  if (0 === items.length) {
    tmp6 = metroRequire;
  } else {
    tmp6 = resolveScreenName(items);
  }
  return tmp6;
};
export const isModalScreenName = function isModalScreenName(baseScreenName) {
  const tmp2 = str.startsWith("" + modal + ":") || str === modal;
  return tmp2;
};
export const getWideViewScreenName = function getWideViewScreenName(baseScreenName) {
  let items;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let rootState = null;
  if (null != rootNavigationRef) {
    rootState = null;
    if (rootNavigationRef.isReady()) {
      rootState = rootNavigationRef.getRootState();
    }
  }
  if (null == rootState) {
    items = [];
  } else {
    const items1 = [];
    items = items1;
    if (null != rootState) {
      while (true) {
        let index = rootState.index;
        let routes = rootState.routes;
        if (index == null) {
          index = rootState.routes.length - 1;
        }
        let tmp3 = routes[index];
        items = items1;
        if (null == tmp3) {
          break;
        } else {
          let obj2 = { name: null, key: null, params: null };
          ({ name: obj3.name, key: obj3.key, params: obj3.params } = tmp3);
          let arr = items1.push(obj2);
          items = items1;
          if (null != tmp3.state) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
  }
  const first = items[0];
  let name;
  if (first != null) {
    name = first.name;
  }
  let combined = null;
  if ("main" === name) {
    let name1;
    if (items[1] != null) {
      name1 = tmp20.name;
    }
    combined = null;
    if (name1 === tabs) {
      let name2;
      if (items[2] != null) {
        name2 = tmp21.name;
      }
      combined = null;
      if (name2 === guilds) {
        let tmp18 = baseScreenName;
        const tmp23 = resolveScreenName(items);
        if (baseScreenName == null) {
          let channelScreenName;
          const found = items.find((name) => name.name === guilds);
          let channelId;
          if (found != null) {
            const params = found.params;
            if (params != null) {
              channelId = params.channelId;
            }
          }
          let tmp14;
          if (typeof channelId === "string") {
            tmp14 = channelId;
          }
          if (null != tmp14) {
            const obj4 = getScreenAnalyticsName;
            channelScreenName = obj4.getChannelScreenName(tmp14);
          } else {
            channelScreenName = React3;
          }
          tmp18 = channelScreenName;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + tmp23 + hasOwnProperty + tmp18;
      }
    }
  }
  return combined;
};