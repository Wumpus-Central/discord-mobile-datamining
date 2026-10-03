// === Module 17011: ChannelSettingsChangeDefaultForumLayout ===

// Module 17011 (ChannelSettingsChangeDefaultForumLayout)
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5974 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10062 */;
import _modDef17012 from "module_17012" /* 17012 */;
import _modDef17013 from "module_17013" /* 17013 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, description: null, thumbnailImagePortrait: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj2.description = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
obj2.thumbnailImagePortrait = { alignSelf: "center" };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(20);
  channel = channel.channel;
  const tmp4 = closure_9();
  let obj = channel(576);
  [tmp6, importDefault] = noop.useState(channel.defaultForumLayout);
  if (cResult[0] !== channel.id) {
    const fn = function u(defaultForumLayout) {
      closure_1_1(defaultForumLayout);
      ChannelSettingsActionCreatorsDefault.updateChannel({ defaultForumLayout });
      const obj2 = { defaultForumLayout };
      ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, { defaultForumLayout });
    };
    cResult[0] = channel.id;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.mFMDSq);
    cResult[2] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  let LIST = tmp6;
  if (tmp6 == null) {
    LIST = tmp(2062).ForumLayout.LIST;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { icon: closure_7(tmp(16972).GridSquareIcon, {}), label: null, value: null };
    const intl2 = tmp(1126).intl;
    obj2.label = intl2.string(tmp(1126).t["U+rQfW"]);
    obj2.value = tmp(2062).ForumLayout.GRID;
    const tmp12 = closure_7(tmp(6071).TableRadioRow, obj2);
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { icon: closure_7(tmp(6588).ListViewIcon, {}), label: null, value: null };
    const intl3 = tmp(1126).intl;
    obj3.label = intl3.string(tmp(1126).t.tuHPRX);
    obj3.value = tmp(2062).ForumLayout.LIST;
    const tmp15 = closure_7(tmp(6071).TableRadioRow, obj3);
    cResult[4] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    if (cResult[6] === LIST) {
      let tmp16 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult1 = intl4.string(tmp(1126).t.MbX5Hu);
      cResult[8] = stringResult1;
      let tmp18 = stringResult1;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] !== tmp4.description) {
      const obj4 = { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: tmp18 };
      const tmp22 = closure_7(tmp(4886).Text, obj4);
      cResult[9] = tmp4.description;
      cResult[10] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[10];
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { title: null };
      const intl5 = tmp(1126).intl;
      obj5.title = intl5.string(tmp(1126).t.e4oMl4);
      const tmp25 = closure_7(tmp(6074).TableRowGroupTitle, obj5);
      cResult[11] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[11];
    }
    if (tmp6 === tmp(2062).ForumLayout.GRID) {
      let tmp28 = _modDef17012;
      let tmp27 = importDefault;
    } else {
      tmp27 = importDefault;
      tmp28 = _modDef17013;
    }
    if (cResult[12] === tmp4.thumbnailImagePortrait) {
      if (cResult[13] === tmp28) {
        let tmp30 = cResult[14];
      }
      if (cResult[15] === tmp4.container) {
        if (cResult[16] === tmp20) {
          if (cResult[17] === tmp30) {
            if (cResult[18] === tmp16) {
              let tmp33 = cResult[19];
            }
            return tmp33;
          }
        }
      }
      const obj6 = { style: tmp4.container, children: null };
      const items = [tmp16, tmp20, tmp23, tmp30];
      obj6.children = items;
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
  const obj8 = { title: tmp8, defaultValue: LIST, onChange: tmp7, hasIcons: true, children: null };
  const items1 = [tmp10, tmp13];
  obj8.children = items1;
  const tmp17 = closure_8(channel(6072).TableRadioGroup, obj8);
  cResult[5] = tmp7;
  cResult[6] = LIST;
  cResult[7] = tmp17;
  tmp16 = tmp17;
  const tmp5 = _slicedToArray(noop.useState(channel.defaultForumLayout), 2);
}) : ((channel) => {
  channel = channel.channel;
  importDefault = undefined;
  const tmp = closure_9();
  [tmp3, c1] = noop.useState(channel.defaultForumLayout);
  const items = [channel.id];
  let obj = { style: tmp.container, children: null };
  const callback = noop.useCallback((defaultForumLayout) => {
    _undefined(defaultForumLayout);
    ChannelSettingsActionCreatorsDefault.updateChannel({ defaultForumLayout });
    const obj2 = { defaultForumLayout };
    ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, { defaultForumLayout });
  }, items);
  let obj2 = { title: null, defaultValue: null, onChange: null, hasIcons: true, children: null };
  const intl = channel(1126).intl;
  obj2.title = intl.string(channel(1126).t.mFMDSq);
  let LIST = tmp3;
  if (tmp3 == null) {
    LIST = tmp7(2062).ForumLayout.LIST;
  }
  obj2.defaultValue = LIST;
  obj2.onChange = callback;
  const obj3 = { icon: closure_7(channel(16972).GridSquareIcon, {}), label: null, value: null };
  const intl2 = tmp7(1126).intl;
  obj3.label = intl2.string(channel(1126).t["U+rQfW"]);
  obj3.value = channel(2062).ForumLayout.GRID;
  const items1 = [closure_7(channel(6071).TableRadioRow, obj3), ];
  const obj4 = { icon: closure_7(channel(6588).ListViewIcon, {}), label: null, value: null };
  const intl3 = tmp7(1126).intl;
  obj4.label = intl3.string(channel(1126).t.tuHPRX);
  obj4.value = channel(2062).ForumLayout.LIST;
  items1[1] = closure_7(channel(6071).TableRadioRow, obj4);
  obj2.children = items1;
  const items2 = [closure_8(channel(6072).TableRadioGroup, obj2), , , ];
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl4 = tmp7(1126).intl;
  obj5.children = intl4.string(channel(1126).t.MbX5Hu);
  items2[1] = closure_7(channel(4886).Text, obj5);
  const obj6 = { title: null };
  const intl5 = tmp7(1126).intl;
  obj6.title = intl5.string(channel(1126).t.e4oMl4);
  items2[2] = closure_7(channel(6074).TableRowGroupTitle, obj6);
  const obj7 = { style: tmp.thumbnailImagePortrait, source: null };
  const tmp2 = _slicedToArray(noop.useState(channel.defaultForumLayout), 2);
  if (tmp3 === channel(2062).ForumLayout.GRID) {
    let tmp10Result = tmp10(17012);
  } else {
    tmp10Result = tmp10(17013);
  }
  obj7.source = tmp10Result;
  items2[3] = closure_7(FastImageDefault, obj7);
  obj.children = items2;
  return closure_8(View, obj);
});
let closure_10 = tmp3;
ReactCompilerGating = fn(558);
let obj4 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(5);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[3] !== stateFromStores) {
    const obj2 = { channel: stateFromStores };
    const tmp11 = closure_7(closure_10, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = tmp11;
  }
  const tmpResult = channelId(504);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = closure_7(closure_10, obj2);
  }
  return tmp2;
});
export const ChannelSettingsChangeDefaultForumLayout = tmp3;