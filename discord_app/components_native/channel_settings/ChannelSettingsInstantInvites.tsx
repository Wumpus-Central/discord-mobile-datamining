// discord_app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../modules/safe_area/useSafeAreaInsets.native.tsx";
import InstantInvite from "../../modules/guild_instant_invites/native/InstantInvite.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelSettingsStore from "../../stores/ChannelSettingsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = globalThis.__r;
const InstantInviteDefault = InstantInvite;

const FastestListDefault = tmp2(6559);
const _modDef10700 = tmp2(10700);
const _modDef10701 = tmp2(10701);
const InstantInviteSelfMeasurerDefault = tmp2(17025);
require = fn;
const View = fn(17).View;
const ChannelSettingsSections = fn(1085).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  content: {
    paddingHorizontal: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    flex: 1,
  },
  gap: null,
};
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  flex: 1,
};
obj2.gap = { height: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { height: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(41);
      const tmp4 = closure_11();
      _require = tmp4;
      const bottom = require("useSafeAreaInsets")().bottom;
      let obj = require("c");
      [r10021, importDefault] = noop.useState(undefined);
      if (cResult[0] !== tmp4.gap.height) {
        const fn = function c(arg0) {
          importDefault(arg0 + gap.gap.height);
        };
        cResult[0] = tmp4.gap.height;
        cResult[1] = fn;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelSettingsStore];
        class L {
          constructor() {
            return closure_1_6.getChannel();
          }
        }
        cResult[2] = items;
        cResult[3] = L;
        let tmp8 = L;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let tmp5 = _slicedToArray(noop.useState(undefined), 2);
      stateFromStores = require("initialize").useStateFromStores(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelSettingsStore];
        class F {
          constructor() {
            return closure_1_6.getInvites();
          }
        }
        cResult[4] = items1;
        cResult[5] = F;
        let tmp12 = F;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult = require("initialize");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp11, tmp12);
      ({ invites, loading } = stateFromStoresObject);
      if (cResult[6] !== invites) {
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
              return closure_1_6.getInvites();
            }
          }
        } else {
          const tmp15 = cResult[8];
        }
        class F {
          constructor() {
            return closure_1_6.getInvites();
          }
        }
        const values = Object.values(invites);
        const sorted = values.sort(tmp15);
        cResult[6] = invites;
        cResult[7] = sorted;
      } else {
        const _Symbol2 = Symbol;
        class F {
          constructor() {
            return closure_1_6.getInvites();
          }
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
              return closure_1_6.getInvites();
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
        const stateFromStoresArray = tmp(tmp2[12]).useStateFromStoresArray(tmp19, M);
        if (cResult[12] === stateFromStoresArray) {
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
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0) {
              obj = { type: "invite", data: arg0 };
              return obj;
            }
          }
          cResult[15] = P;
          class F {
            constructor() {
              return closure_1_6.getInvites();
            }
          }
        } else {
          class P {
            constructor(arg0) {
              obj = { type: "invite", data: arg0 };
              return obj;
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor(arg0) {
              obj = { type: "channel", data: arg0 };
              return obj;
            }
          }
          cResult[16] = R;
          class F {
            constructor() {
              return closure_1_6.getInvites();
            }
          }
        } else {
          class R {
            constructor(arg0) {
              obj = { type: "channel", data: arg0 };
              return obj;
            }
          }
        }
        const items2 = [];
        const tmpResult4 = tmp(tmp2[12]);
        HermesBuiltin.arraySpread(
          stateFromStoresArray.map(tmp21),
          HermesBuiltin.arraySpread(cResult[7].map(stateFromStoresArray.map), 0),
        );
        cResult[12] = stateFromStoresArray;
        cResult[13] = cResult[7];
        cResult[14] = items2;
        const arraySpreadResult = HermesBuiltin.arraySpread(cResult[7].map(map), 0);
      }
      const tmpResult3 = require("initialize");
    }
  : () => {
      let tmp = closure_11();
      _require = tmp;
      let tmp2 = importDefault;
      let obj = dependencyMap;
      [tmp4, importDefault] = invites(memo.useState(undefined), 2);
      let items = [tmp];
      let tmpResult = _require;
      const callback = memo.useCallback((arg0) => {
        importDefault(arg0 + gap.gap.height);
      }, items);
      const tmp3 = invites(memo.useState(undefined), 2);
      const items1 = [memo1];
      dependencyMap = require("initialize").useStateFromStores(items1, () => memo1.getChannel());
      let obj2 = require("initialize");
      const items2 = [memo1];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => memo1.getInvites());
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
      const obj3 = require("initialize");
      const items4 = [ChannelStore];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(items4, () => {
        if (null != id) {
          const sortedLinkedChannelsForGuild = ChannelStore.getSortedLinkedChannelsForGuild(tmp.guild_id);
          let found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
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
        require("ChannelSettingsActionCreators").setSection(constants.INSTANT_INVITES);
      }, []);
      const items7 = [memo1];
      const callback1 = memo.useCallback((arg0, arg1) => {
        if ("invite" === memo1[arg1].type) {
          const obj2 = { invite: tmp.data };
          let tmp5 = options(InstantInviteDefault, obj2);
        } else {
          const obj = { channel: tmp.data };
          tmp5 = options(InstantInvite.LinkedChannelInvite, obj);
        }
        return tmp5;
      }, items7);
      if (!loading) {
        if (0 === memo1.length) {
          const obj5 = { lightSource: _modDef10700, darkSource: _modDef10701, title: null, body: null };
          const intl = tmpResult(1126).intl;
          obj5.title = intl.string(tmpResult(1126).t["+nLJkZ"]);
          const intl2 = tmpResult(1126).intl;
          obj5.body = intl2.string(tmpResult(1126).t.F53CAc);
          return closure_9(tmpResult(1188).EmptyState, obj5);
        }
      }
      if (!loading) {
        if (null != tmp4) {
          const obj6 = { style: tmp.content, children: null };
          const obj7 = {
            sections: items6,
            estimatedListSize: "windowSize",
            itemSize: tmp4,
            renderItem: callback1,
            insetStart: tmp.gap.height,
            insetEnd: useSafeAreaInsetsDefault().bottom,
          };
          obj6.children = closure_9(FastestListDefault, obj7);
          let tmp16Result = closure_9(stateFromStoresArray, obj6);
        }
      }
      const obj8 = { style: tmp.content, children: null };
      tmp = closure_9;
      const items8 = [closure_9(tmpResult(6542).SceneLoadingIndicator, {})];
      tmpResult = null;
      if (memo1.length > 0) {
        tmp2 = InstantInviteSelfMeasurerDefault;
        obj = { item: null, onMeasured: null };
        memo1 = memo1[0];
        obj.item = memo1;
        obj.onMeasured = callback;
        tmpResult = tmp(tmp2, obj);
      }
      items8[1] = tmpResult;
      obj8.children = items8;
      tmp16Result = closure_10(stateFromStoresArray, obj8);
      const obj4 = require("initialize");
    };
