// === Module 16165: getJankScreenName ===

// Module 16165 (getJankScreenName)
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import getScreenAnalyticsName from "getScreenAnalyticsName" /* 16167 */;
import JankScreenConstants from "JankScreenConstants" /* 16166 */;
import size from "module_2" /* 2 */;

function resolveScreenName(items) {
  const params = tmp.params;
  if (items[items.length - 1].name === channel) {
    let channelId1;
    if (params != null) {
      channelId1 = params.channelId;
    }
    if (typeof channelId1 === "string") {
      const channelId = params.channelId;
      if (true === params.showCreateThread) {
        let channelScreenName = React3;
      } else if (null != channelId) {
        channelScreenName = getScreenAnalyticsName.getChannelScreenName(channelId);
      } else {
        channelScreenName = React4;
      }
      return channelScreenName;
    }
  }
  const found = items.find((name) => name.name === modal);
  if (null != found) {
    const params2 = found.params;
    let modal1;
    if (params2 != null) {
      modal = params2.modal;
      if (modal != null) {
        modal1 = modal.modal;
      }
    }
    let tmp6 = null;
    if (null != modal1) {
      let render = modal1.type;
      if (render == null) {
        render = modal1.render;
      }
      if (render == null) {
        render = modal1;
      }
      let name = modal1.displayName;
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
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
      if (index == null) {
        index = tmp2.routes.length - 1;
      }
      let tmp3 = rootState.routes[index];
      if (null == tmp3) {
        break;
      } else {
        if (tmp3.name !== channel) {
          let obj2 = { name: null, key: null, params: null };
          ({ name: obj3.name, key: obj3.key, params: obj3.params } = tmp3);
          let arr = items.push(obj2);
          if (null != tmp3.state) {
            continue;
          } else {
            break;
          }
          break;
        }
        let items1 = [];
        let tmp5 = tmp2;
        if (null != tmp2) {
          while (true) {
            let index2 = tmp5.index;
            if (index2 == null) {
              index2 = tmp5.routes.length - 1;
            }
            let tmp7 = tmp5.routes[index2];
            if (null == tmp7) {
              break;
            } else {
              let obj5 = { name: null, key: null, params: null };
              ({ name: obj4.name, key: obj4.key, params: obj4.params } = tmp7);
              let arr2 = items1.push(obj5);
              if (null == tmp7.state) {
                break;
              }
            }
          }
        }
        let obj7 = { focused: items.concat(items1), rendered: null };
        let items2 = [];
        if (null != tmp2) {
          while (true) {
            let index3 = tmp2.index;
            if (index3 == null) {
              index3 = tmp2.routes.length - 1;
            }
            let tmp10 = tmp2.routes[index3];
            let name;
            if (tmp10 != null) {
              name = tmp10.name;
            }
            let tmp13 = tmp10;
            if (name === channel) {
              let routes = tmp2.routes;
              let found = routes.find((name) => name.name === tabs);
              if (found == null) {
                found = tmp10;
              }
              tmp13 = found;
            }
            if (null == tmp13) {
              break;
            } else {
              let obj8 = { name: null, key: null, params: null };
              ({ name: obj6.name, key: obj6.key, params: obj6.params } = tmp13);
              let arr3 = items2.push(obj8);
              if (null == tmp13.state) {
                break;
              }
            }
          }
        }
        obj7.rendered = items.concat(items2);
        ({ focused, rendered } = obj7);
        if (0 === focused.length) {
          let obj9 = { screen, expectedScreenIds: "", focusedRoute: "accessible" };
          let obj15 = obj9;
        } else {
          obj15 = { screen: resolveScreenName(focused), expectedScreenIds: null, focusedRoute: null };
          let mapped = rendered.map((key) => key.key);
          let str = ",";
          obj15.expectedScreenIds = mapped.join(",");
          obj15.focusedRoute = focused[focused.length - 1];
        }
        return obj15;
      }
    }
  }
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
  if (showCreateThread) {
    let channelScreenName = React3;
  } else if (null != channelId) {
    channelScreenName = getScreenAnalyticsName.getChannelScreenName(channelId);
  } else {
    channelScreenName = React4;
  }
  return channelScreenName;
};
export const getPanelListScreenName = function getPanelListScreenName() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let rootState = null;
  if (null != rootNavigationRef) {
    rootState = null;
    if (rootNavigationRef.isReady()) {
      rootState = rootNavigationRef.getRootState();
    }
  }
  if (null == rootState) {
    let items = [];
  } else {
    const items1 = [];
    items = items1;
    if (null != rootState) {
      while (true) {
        let index = rootState.index;
        if (index == null) {
          index = rootState.routes.length - 1;
        }
        let tmp3 = rootState.routes[index];
        let name;
        if (tmp3 != null) {
          name = tmp3.name;
        }
        let tmp6 = tmp3;
        if (name === channel) {
          let routes = rootState.routes;
          let found = routes.find((name) => name.name === tabs);
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
    let tmp10 = screen;
  } else {
    tmp10 = resolveScreenName(items);
  }
  return tmp10;
};
export const getBaseScreenName = function getBaseScreenName() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let rootState = null;
  if (null != rootNavigationRef) {
    rootState = null;
    if (rootNavigationRef.isReady()) {
      rootState = rootNavigationRef.getRootState();
    }
  }
  if (null == rootState) {
    let items = [];
  } else {
    const items1 = [];
    items = items1;
    if (null != rootState) {
      while (true) {
        let index = rootState.index;
        if (index == null) {
          index = rootState.routes.length - 1;
        }
        let tmp3 = rootState.routes[index];
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
    let tmp6 = screen;
  } else {
    tmp6 = resolveScreenName(items);
  }
  return tmp6;
};
export const isModalScreenName = function isModalScreenName(baseScreenName) {
  return baseScreenName.startsWith("" + modal + ":") || baseScreenName === modal;
};
export const getWideViewScreenName = function getWideViewScreenName(baseScreenName) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let rootState = null;
  if (null != rootNavigationRef) {
    rootState = null;
    if (rootNavigationRef.isReady()) {
      rootState = rootNavigationRef.getRootState();
    }
  }
  if (null == rootState) {
    let items = [];
  } else {
    const items1 = [];
    items = items1;
    if (null != rootState) {
      while (true) {
        let index = rootState.index;
        if (index == null) {
          index = rootState.routes.length - 1;
        }
        let tmp3 = rootState.routes[index];
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
        if (baseScreenName != null) {
          const _HermesInternal = HermesInternal;
          combined = "" + tmp24 + tmp25 + baseScreenName;
        } else {
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
            let channelScreenName = getScreenAnalyticsName.getChannelScreenName(tmp14);
          } else {
            channelScreenName = React4;
          }
        }
      }
    }
  }
  return combined;
};