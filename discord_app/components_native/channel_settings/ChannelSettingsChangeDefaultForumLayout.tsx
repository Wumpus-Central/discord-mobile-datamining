// discord_app/components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../common/FastImage.tsx";
import ChannelSettingsActionCreatorsDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import AssetRegistryDefault from "../../../_runtime/17036_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../_runtime/17037_AssetRegistry.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel, channelId, importDefault;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, description: obj3, thumbnailImagePortrait: { alignSelf: "center" } };
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let intl2;
      let intl3;
      let intl5;
      let items;
      let items1;
      let tmp10;
      let tmp13;
      let tmp6;
      let tmp7;
      let tmp8;
      let obj = channel(576);
      const cResult = obj.c(20);
      channel = channel.channel;
      const tmp4 = closure_9();
      [tmp6, importDefault] = react.useState(channel.defaultForumLayout);
      _slicedToArray(react.useState(channel.defaultForumLayout), 2);
      if (cResult[0] !== channel.id) {
        const fn = function u(defaultForumLayout) {
          importDefault(defaultForumLayout);
          const obj = ChannelSettingsActionCreatorsDefault;
          const obj2 = { defaultForumLayout };
          obj.updateChannel(obj2);
          const obj3 = ChannelSettingsActionCreatorsDefault;
          const obj4 = { defaultForumLayout };
          obj3.saveChannel(channel.id, obj4);
        };
        cResult[0] = channel.id;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const container = tmp4.container;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t.mFMDSq);
        cResult[2] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      let LIST = tmp6;
      if (tmp6 == null) {
        LIST = tmp(2062).ForumLayout.LIST;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          icon: closure_7(tmp(16996).GridSquareIcon, {}),
          label: intl2.string(tmp(1126).t["U+rQfW"]),
          value: tmp(2062).ForumLayout.GRID,
        };
        const TableRadioRow = tmp(6071).TableRadioRow;
        intl2 = tmp(1126).intl;
        const tmp12 = closure_7(TableRadioRow, obj2);
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = {
          icon: closure_7(tmp(6588).ListViewIcon, {}),
          label: intl3.string(tmp(1126).t.tuHPRX),
          value: tmp(2062).ForumLayout.LIST,
        };
        const TableRadioRow2 = tmp(6071).TableRadioRow;
        intl3 = tmp(1126).intl;
        const tmp15 = closure_7(TableRadioRow2, obj3);
        cResult[4] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === tmp7) {
        let tmp16;
        let tmp18;
        let tmp20;
        let tmp23;
        let tmp28;
        let tmp27;
        if (cResult[6] === LIST) {
          tmp16 = cResult[7];
        }
        const _Symbol = Symbol;
        const description = tmp4.description;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult1 = intl4.string(channel(1126).t.MbX5Hu);
          cResult[8] = stringResult1;
          tmp18 = stringResult1;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] !== tmp4.description) {
          let obj4 = { style: description, variant: "text-sm/medium", color: "text-muted", children: tmp18 };
          const tmp22 = closure_7(channel(4886).Text, obj4);
          cResult[9] = tmp4.description;
          cResult[10] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { title: intl5.string(channel(1126).t.e4oMl4) };
          const TableRowGroupTitle = tmp(6074).TableRowGroupTitle;
          intl5 = tmp(1126).intl;
          const tmp25 = closure_7(TableRowGroupTitle, obj5);
          cResult[11] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[11];
        }
        if (tmp6 === channel(2062).ForumLayout.GRID) {
          tmp28 = AssetRegistryDefault;
          tmp27 = importDefault;
        } else {
          tmp27 = importDefault;
          tmp28 = AssetRegistryDefault2;
        }
        if (cResult[12] === tmp4.thumbnailImagePortrait) {
          let tmp30;
          if (cResult[13] === tmp28) {
            tmp30 = cResult[14];
          }
          if (cResult[15] === tmp4.container) {
            if (cResult[16] === tmp20) {
              if (cResult[17] === tmp30) {
                let tmp33;
                if (cResult[18] === tmp16) {
                  tmp33 = cResult[19];
                }
                return tmp33;
              }
            }
          }
          const obj6 = { style: container, children: items };
          items = [tmp16, tmp20, tmp23, tmp30];
          const tmp36 = closure_8(View, obj6);
          cResult[15] = tmp4.container;
          cResult[16] = tmp20;
          cResult[17] = tmp30;
          cResult[18] = tmp16;
          cResult[19] = tmp36;
          tmp33 = tmp36;
        }
        const obj7 = { style: tmp4.thumbnailImagePortrait, source: tmp28 };
        const tmp32 = closure_7(tmp27(5974), obj7);
        cResult[12] = tmp4.thumbnailImagePortrait;
        cResult[13] = tmp28;
        cResult[14] = tmp32;
        tmp30 = tmp32;
      }
      const obj8 = { title: tmp8, defaultValue: LIST, onChange: tmp7, hasIcons: true, children: items1 };
      items1 = [tmp10, tmp13];
      const tmp17 = closure_8(channel(6072).TableRadioGroup, obj8);
      cResult[5] = tmp7;
      cResult[6] = LIST;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : (channel) => {
      let LIST;
      let _undefined;
      let c1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items1;
      let items2;
      let tmp10Result;
      let tmp3;
      channel = channel.channel;
      importDefault = undefined;
      const tmp = closure_9();
      [tmp3, c1] = react.useState(channel.defaultForumLayout);
      const items = [channel.id];
      let obj = { style: tmp.container, children: items2 };
      _slicedToArray(react.useState(channel.defaultForumLayout), 2);
      const callback = react.useCallback((defaultForumLayout) => {
        _undefined(defaultForumLayout);
        const obj = ChannelSettingsActionCreatorsDefault;
        const obj2 = { defaultForumLayout };
        obj.updateChannel(obj2);
        const obj3 = ChannelSettingsActionCreatorsDefault;
        const obj4 = { defaultForumLayout };
        obj3.saveChannel(channel.id, obj4);
      }, items);
      let obj2 = {
        title: intl.string(channel(1126).t.mFMDSq),
        defaultValue: LIST,
        onChange: callback,
        hasIcons: true,
        children: items1,
      };
      const TableRadioGroup = channel(6072).TableRadioGroup;
      intl = channel(1126).intl;
      LIST = tmp3;
      if (tmp3 == null) {
        LIST = tmp7(2062).ForumLayout.LIST;
      }
      let obj3 = {
        icon: closure_7(channel(16996).GridSquareIcon, {}),
        label: intl2.string(channel(1126).t["U+rQfW"]),
        value: channel(2062).ForumLayout.GRID,
      };
      const TableRadioRow = tmp7(6071).TableRadioRow;
      intl2 = tmp7(1126).intl;
      items1 = [closure_7(TableRadioRow, obj3)];
      let obj4 = {
        icon: closure_7(channel(6588).ListViewIcon, {}),
        label: intl3.string(channel(1126).t.tuHPRX),
        value: channel(2062).ForumLayout.LIST,
      };
      const TableRadioRow2 = tmp7(6071).TableRadioRow;
      intl3 = tmp7(1126).intl;
      items1[1] = closure_7(TableRadioRow2, obj4);
      items2 = [closure_8(TableRadioGroup, obj2), , ,];
      const obj5 = {
        style: tmp.description,
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl4.string(channel(1126).t.MbX5Hu),
      };
      const Text = tmp7(4886).Text;
      intl4 = tmp7(1126).intl;
      items2[1] = closure_7(Text, obj5);
      const obj6 = { title: intl5.string(channel(1126).t.e4oMl4) };
      const TableRowGroupTitle = tmp7(6074).TableRowGroupTitle;
      intl5 = tmp7(1126).intl;
      items2[2] = closure_7(TableRowGroupTitle, obj6);
      const obj7 = { style: tmp.thumbnailImagePortrait, source: tmp10Result };
      const tmp11 = FastImageDefault;
      if (tmp3 === channel(2062).ForumLayout.GRID) {
        tmp10Result = tmp10(17036);
      } else {
        tmp10Result = tmp10(17037);
      }
      items2[3] = closure_7(tmp11, obj7);
      return closure_8(View, obj);
    };
let closure_10 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      const obj = channelId(576);
      const cResult = obj.c(5);
      const tmp = channelId;
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null;
      if (null != stateFromStores) {
        let tmp9;
        if (cResult[3] !== stateFromStores) {
          const obj2 = { channel: stateFromStores };
          const tmp12 = closure_7(closure_10, obj2);
          cResult[3] = stateFromStores;
          cResult[4] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[4];
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const items = [ChannelStore];
      const obj = channelId(504);
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let tmp2 = null;
      if (null != stateFromStores) {
        const obj2 = { channel: stateFromStores };
        tmp2 = closure_7(closure_10, obj2);
      }
      return tmp2;
    };
const result = size.fileFinishedImporting(
  "components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx",
);

export default tmp5;
export const ChannelSettingsChangeDefaultForumLayout = tmp4;
