// discord_app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../Constants.tsx";
import useSafeAreaInsetsDefault from "../../modules/safe_area/useSafeAreaInsets.native.tsx";
import FastestListDefault from "../../modules/fastest_list/FastestList.android.tsx";
import InstantInvite from "../../modules/guild_instant_invites/native/InstantInvite.tsx";
import AssetRegistryDefault from "../../../_runtime/10687_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../_runtime/10688_AssetRegistry.js";
import InstantInviteSelfMeasurerDefault from "../../modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelSettingsStore from "../../stores/ChannelSettingsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const InstantInviteDefault = InstantInvite;
let _require, dependencyMap, invites, tmp2;

let c10;
let c9;
let obj2;
let obj3;
const View = react_native.View;
const ChannelSettingsSections = Constants.ChannelSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, gap: obj3 };
obj2 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  flex: 1,
};
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let arr3;
      let arr6;
      let gap;
      let intl;
      let intl2;
      let loading;
      let stateFromStores;
      let tmp10;
      let tmp13;
      let tmp14;
      let tmp19;
      let tmp7;
      let tmp8;
      let tmp9;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(41);
      const tmp4 = closure_11();
      _require = tmp4;
      const bottom = require("useSafeAreaInsets")().bottom;
      [tmp7, importDefault] = arr6(react.useState(undefined), 2);
      arr6(react.useState(undefined), 2);
      if (cResult[0] !== tmp4.gap.height) {
        const fn = function c(arg0) {
          importDefault(arg0 + gap.gap.height);
        };
        cResult[0] = tmp4.gap.height;
        cResult[1] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelSettingsStore];
        class L {
          constructor() {
            return ChannelSettingsStore.getChannel();
          }
        }
        cResult[2] = items;
        cResult[3] = L;
        tmp10 = L;
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(stateFromStores[12]);
      stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelSettingsStore];
        class F {
          constructor() {
            return ChannelSettingsStore.getInvites();
          }
        }
        cResult[4] = items1;
        cResult[5] = F;
        tmp14 = F;
        tmp13 = items1;
      } else {
        tmp13 = cResult[4];
        tmp14 = cResult[5];
      }
      const tmpResult3 = tmp(stateFromStores[12]);
      const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp13, tmp14);
      ({ invites, loading } = stateFromStoresObject);
      if (cResult[6] !== invites) {
        let tmp17;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function j(inviter, inviter2) {
            inviter = inviter.inviter;
            let str;
            if (inviter != null) {
              str = inviter.username;
            }
            if (str == null) {
              str = "";
            }
            const formatted = str.toLowerCase();
            inviter2 = inviter2.inviter;
            let str2;
            if (inviter2 != null) {
              str2 = inviter2.username;
            }
            if (str2 == null) {
              str2 = "";
            }
            return formatted.localeCompare(str2.toLowerCase());
          };
          cResult[8] = fn2;
          class F {
            constructor() {
              return ChannelSettingsStore.getInvites();
            }
          }
        } else {
          tmp17 = cResult[8];
        }
        class F {
          constructor() {
            return ChannelSettingsStore.getInvites();
          }
        }
        const values = Object.values(invites);
        const sorted = values.sort(tmp17);
        cResult[6] = invites;
        cResult[7] = sorted;
        arr3 = sorted;
      } else {
        arr3 = cResult[7];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ChannelStore];
        class F {
          constructor() {
            return ChannelSettingsStore.getInvites();
          }
        }
        cResult[9] = items2;
        tmp19 = items2;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== stateFromStores) {
        class M {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_7;
              sortedLinkedChannelsForGuild = closure_7.getSortedLinkedChannelsForGuild(tmp.guild_id);
              found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
            } else {
              found = [];
            }
            return found;
          }
        }
        cResult[10] = stateFromStores;
        class F {
          constructor() {
            return ChannelSettingsStore.getInvites();
          }
        }
        cResult[11] = M;
      } else {
        class M {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_7;
              sortedLinkedChannelsForGuild = closure_7.getSortedLinkedChannelsForGuild(tmp.guild_id);
              found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
            } else {
              found = [];
            }
            return found;
          }
        }
      }
      const tmpResult4 = tmp(stateFromStores[12]);
      const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp19, M);
      if (cResult[12] === stateFromStoresArray) {
        let tmp27;
        let tmp30;
        class M {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_7;
              sortedLinkedChannelsForGuild = closure_7.getSortedLinkedChannelsForGuild(tmp.guild_id);
              found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
            } else {
              found = [];
            }
            return found;
          }
        }
        if (cResult[17] !== arr6.length) {
          class M {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_7;
                sortedLinkedChannelsForGuild = closure_7.getSortedLinkedChannelsForGuild(tmp.guild_id);
                found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
              } else {
                found = [];
              }
              return found;
            }
          }
          tmp25[0] = arr6.length;
          class F {
            constructor() {
              return ChannelSettingsStore.getInvites();
            }
          }
          cResult[18] = tmp25;
        } else {
          class M {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_7;
                sortedLinkedChannelsForGuild = closure_7.getSortedLinkedChannelsForGuild(tmp.guild_id);
                found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
              } else {
                found = [];
              }
              return found;
            }
          }
        }
        class F {
          constructor() {
            return ChannelSettingsStore.getInvites();
          }
        }
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              const obj = require("ChannelSettingsActionCreators");
              obj.setSection(constants.INSTANT_INVITES);
            }
          }
          const items3 = [];
          class F {
            constructor() {
              return ChannelSettingsStore.getInvites();
            }
          }
          cResult[20] = items3;
          tmp27 = items3;
        } else {
          class X {
            constructor() {
              const obj = require("ChannelSettingsActionCreators");
              obj.setSection(constants.INSTANT_INVITES);
            }
          }
          tmp27 = cResult[20];
        }
        const effect = react.useEffect(X, tmp27);
        if (cResult[21] !== arr6) {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
          cResult[21] = arr6;
          class F {
            constructor() {
              return ChannelSettingsStore.getInvites();
            }
          }
          cResult[22] = D;
        } else {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
        }
        if (!loading) {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
          if (0 === arr6.length) {
            class D {
              constructor(arg0, arg1) {
                let tmp5;
                if ("invite" === arr6[arg1].type) {
                  const obj2 = { invite: arr6[arg1].data };
                  tmp5 = React4(InstantInviteDefault, obj2);
                } else {
                  const obj = { channel: arr6[arg1].data };
                  tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
                }
                return tmp5;
              }
            }
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class D {
                constructor(arg0, arg1) {
                  let tmp5;
                  if ("invite" === arr6[arg1].type) {
                    const obj2 = { invite: arr6[arg1].data };
                    tmp5 = React4(InstantInviteDefault, obj2);
                  } else {
                    const obj = { channel: arr6[arg1].data };
                    tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
                  }
                  return tmp5;
                }
              }
              const obj3 = {
                lightSource: null,
                darkSource: require("AssetRegistry"),
                title: intl.string(tmp(stateFromStores[18]).t["+nLJkZ"]),
                body: intl2.string(tmp(stateFromStores[18]).t.F53CAc),
              };
              const EmptyState = tmp(tmp2[15]).EmptyState;
              class F {
                constructor() {
                  return ChannelSettingsStore.getInvites();
                }
              }
              intl = tmp(tmp2[18]).intl;
              intl2 = tmp(tmp2[18]).intl;
              const tmp31 = closure_9(EmptyState, obj3);
              cResult[23] = tmp31;
              tmp30 = tmp31;
            } else {
              class D {
                constructor(arg0, arg1) {
                  let tmp5;
                  if ("invite" === arr6[arg1].type) {
                    const obj2 = { invite: arr6[arg1].data };
                    tmp5 = React4(InstantInviteDefault, obj2);
                  } else {
                    const obj = { channel: arr6[arg1].data };
                    tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
                  }
                  return tmp5;
                }
              }
            }
          }
          return tmp30;
        }
        if (!loading) {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
          if (null != tmp7) {
            class D {
              constructor(arg0, arg1) {
                let tmp5;
                if ("invite" === arr6[arg1].type) {
                  const obj2 = { invite: arr6[arg1].data };
                  tmp5 = React4(InstantInviteDefault, obj2);
                } else {
                  const obj = { channel: arr6[arg1].data };
                  tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
                }
                return tmp5;
              }
            }
            const obj4 = {
              sections: null,
              estimatedListSize: "windowSize",
              itemSize: tmp7,
              renderItem: D,
              insetStart: tmp4.gap.height,
              insetEnd: bottom,
            };
            class F {
              constructor() {
                return ChannelSettingsStore.getInvites();
              }
            }
            cResult[32] = tmp7;
            cResult[33] = D;
            cResult[34] = bottom;
            cResult[35] = tmp25;
            cResult[36] = tmp4.gap.height;
            cResult[37] = closure_9(require("FastestList"), obj4);
            const tmp34 = closure_9(require("FastestList"), obj4);
          }
          tmp30 = tmp35;
        }
        const _Symbol2 = Symbol;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
          closure_9(tmp(stateFromStores[19]).SceneLoadingIndicator, {});
          class F {
            constructor() {
              return ChannelSettingsStore.getInvites();
            }
          }
        } else {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
        }
        if (cResult[25] === tmp8) {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
        }
        let tmp39 = null;
        if (arr6.length > 0) {
          class D {
            constructor(arg0, arg1) {
              let tmp5;
              if ("invite" === arr6[arg1].type) {
                const obj2 = { invite: arr6[arg1].data };
                tmp5 = React4(InstantInviteDefault, obj2);
              } else {
                const obj = { channel: arr6[arg1].data };
                tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
              }
              return tmp5;
            }
          }
          const obj5 = { item: arr6[0], onMeasured: null };
          class F {
            constructor() {
              return ChannelSettingsStore.getInvites();
            }
          }
          tmp39 = closure_9(require("InstantInviteSelfMeasurer"), obj5);
        }
        cResult[25] = tmp8;
        cResult[26] = arr6[0];
        cResult[27] = arr6.length;
        cResult[28] = tmp39;
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(arg0, arg1) {
            let tmp5;
            if ("invite" === arr6[arg1].type) {
              const obj2 = { invite: arr6[arg1].data };
              tmp5 = React4(InstantInviteDefault, obj2);
            } else {
              const obj = { channel: arr6[arg1].data };
              tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
            }
            return tmp5;
          }
        }
        cResult[15] = P;
        class F {
          constructor() {
            return ChannelSettingsStore.getInvites();
          }
        }
      } else {
        class D {
          constructor(arg0, arg1) {
            let tmp5;
            if ("invite" === arr6[arg1].type) {
              const obj2 = { invite: arr6[arg1].data };
              tmp5 = React4(InstantInviteDefault, obj2);
            } else {
              const obj = { channel: arr6[arg1].data };
              tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
            }
            return tmp5;
          }
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(arg0, arg1) {
            let tmp5;
            if ("invite" === arr6[arg1].type) {
              const obj2 = { invite: arr6[arg1].data };
              tmp5 = React4(InstantInviteDefault, obj2);
            } else {
              const obj = { channel: arr6[arg1].data };
              tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
            }
            return tmp5;
          }
        }
        cResult[16] = R;
        class F {
          constructor() {
            return ChannelSettingsStore.getInvites();
          }
        }
      } else {
        class D {
          constructor(arg0, arg1) {
            let tmp5;
            if ("invite" === arr6[arg1].type) {
              const obj2 = { invite: arr6[arg1].data };
              tmp5 = React4(InstantInviteDefault, obj2);
            } else {
              const obj = { channel: arr6[arg1].data };
              tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
            }
            return tmp5;
          }
        }
      }
      const items4 = [...arr3.map(tmp22), ...stateFromStoresArray.map(tmp23)];
      cResult[12] = stateFromStoresArray;
      cResult[13] = arr3;
      cResult[14] = items4;
      arr6 = items4;
    }
  : () => {
      let closure_2;
      let gap;
      let intl;
      let intl2;
      let items8;
      let memo;
      let memo1;
      let obj6;
      let tmp21;
      let tmp5;
      const tmp = closure_11();
      _require = tmp;
      const bottom = useSafeAreaInsetsDefault().bottom;
      [tmp5, importDefault] = invites(memo.useState(undefined), 2);
      let items = [tmp];
      invites(memo.useState(undefined), 2);
      const callback = memo.useCallback((arg0) => {
        importDefault(arg0 + gap.gap.height);
      }, items);
      let obj = require("get initialized");
      const items1 = [memo1];
      dependencyMap = obj.useStateFromStores(items1, () => memo1.getChannel());
      let obj2 = require("get initialized");
      const items2 = [memo1];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => memo1.getInvites());
      invites = stateFromStoresObject.invites;
      const loading = stateFromStoresObject.loading;
      const items3 = [invites];
      memo = memo.useMemo(() => {
        const values = Object.values(invites);
        return values.sort((inviter, inviter2) => {
          inviter = inviter.inviter;
          let str;
          if (inviter != null) {
            str = inviter.username;
          }
          if (str == null) {
            str = "";
          }
          const formatted = str.toLowerCase();
          inviter2 = inviter2.inviter;
          let str2;
          if (inviter2 != null) {
            str2 = inviter2.username;
          }
          if (str2 == null) {
            str2 = "";
          }
          return formatted.localeCompare(str2.toLowerCase());
        });
      }, items3);
      const items4 = [ChannelStore];
      const obj3 = require("get initialized");
      const stateFromStoresArray = obj3.useStateFromStoresArray(items4, () => {
        let found;
        if (null != id) {
          const sortedLinkedChannelsForGuild = ChannelStore.getSortedLinkedChannelsForGuild(tmp.guild_id);
          found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
        } else {
          found = [];
        }
        return found;
      });
      const items5 = [memo, stateFromStoresArray];
      memo1 = memo.useMemo(() => {
        const items = [
          ...memo.map((data) => ({ type: "invite", data })),
          ...stateFromStoresArray.map((data) => ({ type: "channel", data })),
        ];
        return items;
      }, items5);
      const items6 = [memo1.length];
      const effect = memo.useEffect(() => {
        const obj = require("ChannelSettingsActionCreators");
        obj.setSection(constants.INSTANT_INVITES);
      }, []);
      const items7 = [memo1];
      const callback1 = memo.useCallback((arg0, arg1) => {
        let tmp5;
        if ("invite" === memo1[arg1].type) {
          const obj2 = { invite: memo1[arg1].data };
          tmp5 = React4(InstantInviteDefault, obj2);
        } else {
          const obj = { channel: memo1[arg1].data };
          tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
        }
        return tmp5;
      }, items7);
      if (!loading) {
        if (0 === memo1.length) {
          const obj4 = {
            lightSource: AssetRegistryDefault,
            darkSource: AssetRegistryDefault2,
            title: intl.string(require("intl").t["+nLJkZ"]),
            body: intl2.string(require("intl").t.F53CAc),
          };
          const EmptyState = tmp7(1188).EmptyState;
          intl = tmp7(1126).intl;
          intl2 = tmp7(1126).intl;
          tmp21 = closure_9(EmptyState, obj4);
        }
        return tmp21;
      }
      if (!loading) {
        let tmp17Result;
        if (null != tmp5) {
          const obj5 = { style: tmp.content, children: closure_9(FastestListDefault, obj6) };
          obj6 = {
            sections: items6,
            estimatedListSize: "windowSize",
            itemSize: tmp5,
            renderItem: callback1,
            insetStart: tmp.gap.height,
            insetEnd: bottom,
          };
          tmp17Result = closure_9(stateFromStoresArray, obj5);
        }
        tmp21 = tmp17Result;
      }
      const obj7 = { style: tmp.content, children: items8 };
      items8 = [closure_9(require("SceneLoadingIndicator").SceneLoadingIndicator, {})];
      let tmp19Result = null;
      const tmp18 = stateFromStoresArray;
      if (memo1.length > 0) {
        const obj8 = { item: memo1[0], onMeasured: callback };
        tmp19Result = closure_9(InstantInviteSelfMeasurerDefault, obj8);
      }
      items8[1] = tmp19Result;
      tmp17Result = closure_10(tmp18, obj7);
    };
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default tmp4;
