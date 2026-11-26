// === Module 18481: useConjureViewPlacement ===

// Module 18481 (useConjureViewPlacement)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureViewsTypes from "ConjureViewsTypes" /* 7708 */;
import conjureViewPlacement from "conjureViewPlacement" /* 18465 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/views/useConjureViewPlacement.tsx");

export default function useConjureViewPlacement(install_scope, views) {
  _require = views;
  views = undefined;
  if (views != null) {
    views = views.views;
  }
  if (views == null) {
    views = null;
  }
  dependencyMap = tmp2;
  let isConjureLiveResult = null != views;
  if (isConjureLiveResult) {
    isConjureLiveResult = require("ConjurePublishTypes").isConjureLive(views.publishState);
    let obj = require("ConjurePublishTypes");
  }
  _slicedToArray = isConjureLiveResult;
  let appChannels1;
  if (views != null) {
    appChannels1 = views.mounts.appChannels;
  }
  items = [closure_5];
  let items1 = [appChannels1];
  closure_5 = require("initialize").useStateFromStoresObject(items, () => {
    items = appChannels1;
    if (appChannels1 == null) {
      items = [];
    }
    return Object.fromEntries(items.map((id) => {
      id = id.id;
      items = [id, ];
      channel = channel.getChannel(id);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      items[1] = name;
      return items;
    }));
  }, items1);
  [draft] = appChannels1.useState(() => {
    let result = null;
    if (null != views) {
      const obj2 = {
        personal,
        live: isConjureLiveResult,
        channelName(arg0) {
            return closure_1_5[arg0];
          },
        buildAppChannels: null
      };
      let previewAppChannels;
      if (views != null) {
        previewAppChannels = views.previewAppChannels;
      }
      obj2.buildAppChannels = previewAppChannels;
      result = conjureViewPlacement.initialConjureViewPlacement(tmp, obj2);
    }
    return result;
  });
  closure_7 = tmp11;
  if (tmp12) {
    const obj4 = {
      personal: tmp2,
      live: isConjureLiveResult,
      channelName(arg0) {
          return closure_1_5[arg0];
        },
      buildAppChannels: null
    };
    let previewAppChannels;
    if (views != null) {
      previewAppChannels = views.previewAppChannels;
    }
    obj4.buildAppChannels = previewAppChannels;
    tmp11(tmp7(18465).initialConjureViewPlacement(views, obj4));
    const tmp7Result = tmp7(18465);
  }
  let views1;
  if (views != null) {
    views1 = views.views;
  }
  let items2 = [draft, views1];
  const memo = obj3.useMemo(() => {
    let result = null;
    if (null != first) {
      result = null;
      if (null != views1) {
        result = conjureViewPlacement.checkConjureViewPlacement(tmp, tmp3);
      }
    }
    return result;
  }, items2);
  closure_10 = obj3.useCallback((arg0) => {
    closure_0 = arg0;
    return closure_7((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        tmp = closure_0(arg0);
      }
      return tmp;
    });
  }, []);
  if (null != draft) {
    if (null != views1) {
      if (null != memo) {
        function isMissing(activity) {
          let hasItem = null != activity;
          if (hasItem) {
            const missingViews = memo.missingViews;
            hasItem = missingViews.includes(activity);
          }
          return hasItem;
        }
        function viewChoices(value) {
          if (null != value) {
            if (typeof isMissing === "function") {
              let hasItem = null != value;
              if (hasItem) {
                const missingViews = memo.missingViews;
                hasItem = missingViews.includes(value);
              }
              if (hasItem) {
                const obj = { value, label: null, missing: true };
                const intl = util.intl;
                const obj2 = { view: value };
                obj.label = intl.formatToPlainString(_modDef4245.qRfT8T, obj2);
                items = [obj];
                let items2 = items;
              }
              const items1 = [];
              HermesBuiltin.arraySpread(views1.map((id) => ({ value: id.id, label: id.name, missing: false })), HermesBuiltin.arraySpread(items2, 0));
              return items1;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          items2 = [];
        }
        const channelErrors = memo.channelErrors;
        const obj5 = {
          views: views1,
          personal: tmp2,
          draft,
          surfaceChoices(activity) {
                  const obj = { value: null, label: null, missing: false };
                  const intl = util.intl;
                  obj.label = intl.string(_modDef4245.tkc5qm);
                  items = [obj, ...viewChoices(activity)];
                  return items;
                },
          channelChoices(view) {
                  return viewChoices(view);
                },
          setActivity(activity) {
                  return closure_10((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj.activity = activity;
                    return obj;
                  });
                },
          setVoiceChannel(voiceChannel) {
                  return closure_10((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj.voiceChannel = voiceChannel;
                    return obj;
                  });
                },
          addAppChannel() {
                  return closure_10((appChannels) => closure_0(closure_2[5]).addConjureViewAppChannel(appChannels, views1));
                },
          removeAppChannel(key) {
                  closure_0 = key;
                  return closure_10((appChannels) => {
                    const f140041 = () => null;
                    const obj = {};
                    const merged = Object.assign(appChannels);
                    appChannels = appChannels.appChannels;
                    obj.appChannels = appChannels.flatMap((key) => {
                      let tmp = key;
                      if (key.key === closure_0) {
                        items = f140043(key);
                        if (items == null) {
                          items = [];
                        }
                        tmp = items;
                      }
                      return tmp;
                    });
                    return obj;
                  });
                },
          renameAppChannel(key, arg1) {
                  closure_0 = key;
                  closure_1 = arg1;
                  return closure_10((appChannels) => {
                    const f140042 = (arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj.name = f140042;
                      return obj;
                    };
                    let obj = {};
                    let merged = Object.assign(appChannels);
                    appChannels = appChannels.appChannels;
                    obj.appChannels = appChannels.flatMap((key) => {
                      let tmp = key;
                      if (key.key === closure_0) {
                        items = f140043(key);
                        if (items == null) {
                          items = [];
                        }
                        tmp = items;
                      }
                      return tmp;
                    });
                    return obj;
                  });
                },
          setAppChannelView(key, arg1) {
                  closure_0 = key;
                  closure_1 = arg1;
                  return closure_10((appChannels) => {
                    const f140043 = (arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj.view = f140043;
                      return obj;
                    };
                    let obj = {};
                    let merged = Object.assign(appChannels);
                    appChannels = appChannels.appChannels;
                    obj.appChannels = appChannels.flatMap((key) => {
                      let tmp = key;
                      if (key.key === closure_0) {
                        items = f140043(key);
                        if (items == null) {
                          items = [];
                        }
                        tmp = items;
                      }
                      return tmp;
                    });
                    return obj;
                  });
                },
          canAddAppChannel: null,
          hasExistingAppChannel: null,
          appChannelLimitHint: null,
          channelError: null,
          missingNotice: null,
          unplacedNotice: null,
          isMissing: null,
          blocked: null,
          wire: null
        };
        let tmp17 = !tmp2;
        if (!tmp2) {
          tmp17 = views1.length > 0;
        }
        if (tmp17) {
          tmp17 = draft.appChannels.length < tmp7(7708).CONJURE_MAX_VIEW_APP_CHANNELS;
        }
        obj5.canAddAppChannel = tmp17;
        let appChannels = draft.appChannels;
        obj5.hasExistingAppChannel = appChannels.some((existing) => null != existing.existing);
        let intl = tmp7(1112).intl;
        const obj6 = { count: tmp7(7708).CONJURE_MAX_VIEW_APP_CHANNELS };
        obj5.appChannelLimitHint = intl.formatToPlainString(views(4245).K90CLK, obj6);
        obj5.channelError = function channelError(key) {
          value = channelErrors.get(key);
          if ("empty" === value) {
            const intl4 = util.intl;
            return intl4.string(_modDef4245["6Eeo8t"]);
          } else if ("too_long" === value) {
            const intl3 = util.intl;
            const obj = { max: ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH };
            return intl3.formatToPlainString(_modDef4245["4dSq3U"], obj);
          } else if ("unusable" === value) {
            const intl2 = util.intl;
            return intl2.string(_modDef4245.CUlTpp);
          } else if ("duplicate" === value) {
            const intl = util.intl;
            return intl.string(_modDef4245.k4F0ZO);
          } else {
            return null;
          }
        };
        let formatToPlainStringResult = null;
        if (0 !== memo.missingViews.length) {
          function viewName(item) {
            closure_0 = item;
            const found = views1.find((id) => id.id === closure_0);
            let name;
            if (found != null) {
              name = found.name;
            }
            if (name == null) {
              name = item;
            }
            return name;
          }
          let intl2 = tmp7(1112).intl;
          const obj7 = { views: null };
          let missingViews = memo.missingViews;
          const mapped = missingViews.map(viewName);
          obj7.views = mapped.join(", ");
          formatToPlainStringResult = intl2.formatToPlainString(tmp18(4245)["4k/FdZ"], obj7);
        }
        obj5.missingNotice = formatToPlainStringResult;
        let formatToPlainStringResult1 = null;
        if (0 !== memo.unplacedViews.length) {
          let intl3 = tmp7(1112).intl;
          const obj8 = { views: null };
          const unplacedViews = memo.unplacedViews;
          const mapped1 = unplacedViews.map((name) => name.name);
          obj8.views = mapped1.join(", ");
          formatToPlainStringResult1 = intl3.formatToPlainString(tmp18(4245)["9G0FW8"], obj8);
        }
        obj5.unplacedNotice = formatToPlainStringResult1;
        obj5.isMissing = isMissing;
        obj5.blocked = memo.blocked;
        obj5.wire = tmp7(18465).conjureViewPlacementWire(draft);
        return obj5;
      }
    }
  }
  return null;
};