// discord_app/modules/conjure/views/conjureViewPlacement.tsx
import ConjureViewsTypes from "ConjureViewsTypes.tsx";
import conjureAppChannelNameDefault from "conjureAppChannelName.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
function placedViewIds(appChannels) {
  appChannels = appChannels.appChannels;
  set = new Set(appChannels.map((view) => view.view));
  if (null != appChannels.activity) {
    set.add(appChannels.activity);
  }
  if (null != appChannels.voiceChannel) {
    set.add(appChannels.voiceChannel);
  }
  return set;
}
function sentName(nextResult) {
  ({ name, existing } = nextResult);
  let recordedName;
  if (existing != null) {
    recordedName = existing.recordedName;
  }
  if (recordedName == null) {
    recordedName = name.trim();
  }
  return recordedName;
}
let c4 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/views/conjureViewPlacement.tsx");

export function initialConjureViewPlacement(views, buildAppChannels) {
  ({ personal, live, channelName } = buildAppChannels);
  if (channelName === undefined) {
    channelName = function s() {};
  }
  buildAppChannels = buildAppChannels.buildAppChannels;
  if (buildAppChannels === undefined) {
    buildAppChannels = [];
  }
  let first = _slicedToArray(views.views, 1)[0];
  if (!views.placed) {
    if (!live) {
      if (null != first) {
        views = views.views;
        let tmp14 = null;
        if (views.some((suggestedSurfaces) => suggestedSurfaces.suggestedSurfaces.length > 0)) {
          set = "activity";
          const first1 = views.filter((suggestedSurfaces) => {
            suggestedSurfaces = suggestedSurfaces.suggestedSurfaces;
            return suggestedSurfaces.includes(set);
          })[0];
          let id;
          if (first1 != null) {
            id = first1.id;
          }
          if (id == null) {
            id = null;
          }
          let obj = { activity: id, voiceChannel: null, appChannels: null };
          set = "voice_channel";
          const first2 = views.filter((suggestedSurfaces) => {
            suggestedSurfaces = suggestedSurfaces.suggestedSurfaces;
            return suggestedSurfaces.includes(set);
          })[0];
          let id1;
          if (first2 != null) {
            id1 = first2.id;
          }
          if (id1 == null) {
            id1 = null;
          }
          obj.voiceChannel = id1;
          set = "app_channel";
          let found = views.filter((suggestedSurfaces) => {
            suggestedSurfaces = suggestedSurfaces.suggestedSurfaces;
            return suggestedSurfaces.includes(set);
          });
          const _Set = Set;
          set = new Set();
          obj.appChannels = found
            .flatMap((name) => {
              items = [name.name.trim(), name.id];
              const found = items.find((item) => {
                const tmp2 = set(set2[2])(item);
                let tmp3 = "" !== tmp2;
                if (tmp3) {
                  tmp3 = item.length <= set(set2[1]).CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH;
                }
                if (tmp3) {
                  tmp3 = !set.has(tmp2);
                }
                return tmp3;
              });
              if (null == found) {
                let items1 = [];
              } else {
                set.add(conjureAppChannelNameDefault(found));
                const obj = { key: null, name: null, view: null };
                const sum = c4 + 1;
                c4 = sum;
                const _HermesInternal = HermesInternal;
                obj.key = "channel-" + sum;
                obj.name = found;
                obj.view = name.id;
                items1 = [obj];
              }
              return items1;
            })
            .slice(0, set(7708).CONJURE_MAX_VIEW_APP_CHANNELS);
          tmp14 = obj;
          const flatMapResult = found.flatMap((name) => {
            items = [name.name.trim(), name.id];
            const found = items.find((item) => {
              const tmp2 = set(set2[2])(item);
              let tmp3 = "" !== tmp2;
              if (tmp3) {
                tmp3 = item.length <= set(set2[1]).CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH;
              }
              if (tmp3) {
                tmp3 = !set.has(tmp2);
              }
              return tmp3;
            });
            if (null == found) {
              let items1 = [];
            } else {
              set.add(conjureAppChannelNameDefault(found));
              const obj = { key: null, name: null, view: null };
              const sum = c4 + 1;
              c4 = sum;
              const _HermesInternal = HermesInternal;
              obj.key = "channel-" + sum;
              obj.name = found;
              obj.view = name.id;
              items1 = [obj];
            }
            return items1;
          });
        }
        if (tmp14 == null) {
          let obj2 = { activity: null, voiceChannel: null, appChannels: null };
          if (personal) {
            obj2.activity = first.id;
            first = [];
            obj2.appChannels = first;
          } else {
            items = [first];
            const _Set2 = Set;
            const set1 = new Set();
            closure_129_0 = set1;
            obj2.appChannels = items.flatMap((name) => {
              items = [name.name.trim(), name.id];
              const found = items.find((item) => {
                const tmp2 = set(set2[2])(item);
                let tmp3 = "" !== tmp2;
                if (tmp3) {
                  tmp3 = item.length <= set(set2[1]).CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH;
                }
                if (tmp3) {
                  tmp3 = !set.has(tmp2);
                }
                return tmp3;
              });
              if (null == found) {
                let items1 = [];
              } else {
                set.add(conjureAppChannelNameDefault(found));
                const obj = { key: null, name: null, view: null };
                const sum = c4 + 1;
                c4 = sum;
                const _HermesInternal = HermesInternal;
                obj.key = "channel-" + sum;
                obj.name = found;
                obj.view = name.id;
                items1 = [obj];
              }
              return items1;
            });
          }
        }
      }
      if (personal) {
        let activity = tmp14.activity;
        if (activity == null) {
          const first3 = tmp14.appChannels[0];
          let view;
          if (first3 != null) {
            view = first3.view;
          }
          activity = view;
        }
        if (activity == null) {
          activity = null;
        }
        const obj3 = { activity, voiceChannel: null, appChannels: [] };
        let tmp22 = obj3;
      } else {
        tmp22 = tmp14;
        if (live) {
          tmp22 = tmp14;
          if (!views.placed) {
            const views1 = views.views;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            const first4 = _slicedToArray(views1, 1)[0];
            closure_131_0 = first4;
            let tmp25 = tmp14;
            if (null != first4) {
              const _Set3 = Set;
              const set2 = new Set(views1.map((id) => id.id));
              closure_131_1 = set2;
              const _Set4 = Set;
              const appChannels = tmp14.appChannels;
              const set3 = new Set(
                appChannels.map((item) => {
                  ({ name, existing } = item);
                  let recordedName;
                  if (existing != null) {
                    recordedName = existing.recordedName;
                  }
                  if (recordedName == null) {
                    recordedName = name.trim();
                  }
                  return set(set2[2])(recordedName);
                }),
              );
              closure_131_2 = set3;
              const flatMapResult1 = buildAppChannels.flatMap((name) => {
                const tmp = conjureAppChannelNameDefault(name);
                if ("" !== tmp) {
                  if (!set2.has(tmp)) {
                    set2.add(tmp);
                    let id = name;
                    if (!set.has(name)) {
                      id = set.id;
                    }
                    const obj = { key: null, name: null, view: null };
                    const sum = c4 + 1;
                    c4 = sum;
                    const _HermesInternal = HermesInternal;
                    obj.key = "channel-" + sum;
                    obj.name = name;
                    obj.view = id;
                    items = [obj];
                  }
                  return items;
                }
                items = [];
              });
              const obj4 = {};
              let merged = Object.assign(tmp14);
              let items1 = [];
              HermesBuiltin.arraySpread(flatMapResult1, HermesBuiltin.arraySpread(tmp14.appChannels, 0));
              obj4.appChannels = items1.slice(0, set(7708).CONJURE_MAX_VIEW_APP_CHANNELS);
              tmp25 = obj4;
            }
            tmp22 = tmp25;
          }
        }
      }
      return tmp22;
    }
  }
  const mounts = views.mounts;
  closure_130_0 = channelName;
  const obj5 = { activity: mounts.activity, voiceChannel: mounts.voiceChannel, appChannels: null };
  const appChannels1 = mounts.appChannels;
  const substr = appChannels1.slice(0, set(7708).CONJURE_MAX_VIEW_APP_CHANNELS);
  obj5.appChannels = substr.map((name) => {
    name = name.name;
    let tmp = set(name.id);
    if (tmp == null) {
      tmp = name;
    }
    const obj = {};
    const obj2 = { key: null, name: tmp, view: name.view };
    const sum = c4 + 1;
    c4 = sum;
    obj2.key = "channel-" + sum;
    const merged = Object.assign(obj2);
    obj.existing = { currentName: tmp, recordedName: name };
    return obj;
  });
  tmp14 = obj5;
}
export function addConjureViewAppChannel(appChannels, arr) {
  if (appChannels.appChannels.length < ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNELS) {
    if (0 !== arr.length) {
      const _Set2 = Set;
      appChannels = appChannels.appChannels;
      set = new Set(appChannels.map((view) => view.view));
      if (null != appChannels.activity) {
        set.add(appChannels.activity);
      }
      if (null != appChannels.voiceChannel) {
        set.add(appChannels.voiceChannel);
      }
      let found = arr.find((id) => !set.has(id.id));
      if (found == null) {
        found = arr[0];
      }
      const obj = {};
      const merged = Object.assign(appChannels);
      items = [];
      const name = found.name;
      const appChannels1 = appChannels.appChannels;
      const _Set = Set;
      const set1 = new Set(
        appChannels1.map((item) => {
          ({ name, existing } = item);
          let recordedName;
          if (existing != null) {
            recordedName = existing.recordedName;
          }
          if (recordedName == null) {
            recordedName = name.trim();
          }
          return conjureAppChannelNameDefault(recordedName);
        }),
      );
      let num2 = 2;
      let tmp14 = name;
      if (set1.has(conjureAppChannelNameDefault(name))) {
        const _HermesInternal = HermesInternal;
        const combined = "" + name + " " + num2;
        tmp14 = combined;
        while (tmp16(conjureAppChannelNameDefault(combined))) {
          num2 = num2 + 1;
          continue;
        }
      }
      const obj2 = { key: null, name: null, view: null };
      const sum = c4 + 1;
      c4 = sum;
      const _HermesInternal2 = HermesInternal;
      obj2.key = "channel-" + sum;
      obj2.name = tmp14;
      obj2.view = found.id;
      items[HermesBuiltin.arraySpread(appChannels.appChannels, 0)] = obj2;
      obj.appChannels = items;
      return obj;
    }
  }
  return appChannels;
}
export function checkConjureViewPlacement(appChannels, arr) {
  new Set(arr.map((id) => id.id));
  const tmp2 = placedViewIds(appChannels);
  items = [...tmp2];
  const found = items.filter((item) => !set.has(item));
  const map = new Map();
  const set1 = new Set();
  const iter = appChannels.appChannels[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let tmp6 = sentName(nextResult);
    let arr3 = tmp6;
    let tmp9 = conjureAppChannelNameDefault(tmp6);
    if ("" === tmp6) {
      let result = map.set(tmp4.key, "empty");
    } else if (arr3.length > ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH) {
      let result1 = map.set(tmp4.key, "too_long");
    } else if ("" === tmp9) {
      let result2 = map.set(tmp4.key, "unusable");
    } else if (set1.has(tmp9)) {
      let result3 = map.set(tmp4.key, "duplicate");
    } else {
      let addResult = set1.add(tmp9);
    }
    continue;
  }
  return {
    channelErrors: map,
    missingViews: found,
    unplacedViews: arr.filter((id) => !set.has(id.id)),
    blocked: map.size > 0 || found.length > 0,
  };
}
export function conjureViewPlacementWire(activity) {
  const obj = { activity: activity.activity, voice_channel: activity.voiceChannel, app_channels: null };
  const appChannels = activity.appChannels;
  obj.app_channels = appChannels.map((view) => {
    ({ name, existing } = view);
    let recordedName;
    if (existing != null) {
      recordedName = existing.recordedName;
    }
    if (recordedName == null) {
      recordedName = name.trim();
    }
    return { name: recordedName, view: view.view };
  });
  return obj;
}
export function conjureViewPlacementNeeded(views) {
  let tmp = null != views;
  if (tmp) {
    const placed = views.placed;
    let tmp2 = !placed;
    if (placed) {
      tmp2 = views.missingViews.length > 0;
    }
    tmp = tmp2;
  }
  return tmp;
}
export function conjureViewPlacementCreatedChannels(draft, appChannels) {
  appChannels = draft.appChannels;
  return appChannels.filter((item) => {
    appChannels = item;
    return !appChannels.some((name) => {
      ({ name, existing } = closure_0);
      let recordedName;
      if (existing != null) {
        recordedName = existing.recordedName;
      }
      if (recordedName == null) {
        recordedName = name.trim();
      }
      return name.name === conjureAppChannelNameDefault(recordedName);
    });
  }).length;
}
