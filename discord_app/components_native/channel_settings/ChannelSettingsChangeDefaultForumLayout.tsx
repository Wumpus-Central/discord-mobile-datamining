// === Module 16856: ChannelSettingsChangeDefaultForumLayout ===

// Module 16856 (ChannelSettingsChangeDefaultForumLayout)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5587 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8625 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
class ChannelSettingsChangeDefaultForumLayout {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    tmp = closure_9();
    tmp2 = closure_3(closure_4.useState(channel.defaultForumLayout), 2);
    [tmp3, closure_1] = tmp2;
    items = [];
    items[0] = channel.id;
    tmp5 = jsxs;
    obj = { style: tmp.container, children: null };
    tmp7 = channel;
    tmp8 = closure_2;
    callback = closure_4.useCallback((defaultForumLayout) => {
      _undefined(defaultForumLayout);
      let obj = { defaultForumLayout };
      obj.updateChannel(obj);
      obj = { defaultForumLayout };
      ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, obj);
    }, items);
    tmp6 = View;
    obj = { title: null, defaultValue: null, onChange: null, hasIcons: true, children: null };
    intl = channel(closure_2[9]).intl;
    obj.title = intl.string(channel(closure_2[9]).t.mFMDSq);
    LIST = tmp3;
    if (tmp3 == null) {
      LIST = tmp7(tmp8[10]).ForumLayout.LIST;
    }
    obj.defaultValue = LIST;
    obj.onChange = callback;
    tmp9 = jsx;
    obj1 = { icon: jsx(tmp7(tmp8[12]).GridSquareIcon, {}), label: null, value: null };
    intl2 = tmp7(tmp8[9]).intl;
    obj1.label = intl2.string(tmp7(tmp8[9]).t["U+rQfW"]);
    obj1.value = tmp7(tmp8[10]).ForumLayout.GRID;
    items1 = [, ];
    items1[0] = jsx(tmp7(tmp8[11]).TableRadioRow, obj1);
    obj2 = { icon: jsx(tmp7(tmp8[13]).ListViewIcon, {}), label: null, value: null };
    intl3 = tmp7(tmp8[9]).intl;
    obj2.label = intl3.string(tmp7(tmp8[9]).t.tuHPRX);
    obj2.value = tmp7(tmp8[10]).ForumLayout.LIST;
    items1[1] = jsx(tmp7(tmp8[11]).TableRadioRow, obj2);
    obj.children = items1;
    items2 = [, , , ];
    items2[0] = tmp5(channel(closure_2[8]).TableRadioGroup, obj);
    obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: null };
    intl4 = tmp7(tmp8[9]).intl;
    obj3.children = intl4.string(tmp7(tmp8[9]).t.MbX5Hu);
    items2[1] = jsx(tmp7(tmp8[14]).Text, obj3);
    obj4 = { title: null };
    intl5 = tmp7(tmp8[9]).intl;
    obj4.title = intl5.string(tmp7(tmp8[9]).t.e4oMl4);
    items2[2] = jsx(tmp7(tmp8[15]).TableRowGroupTitle, obj4);
    tmp10 = closure_1;
    obj5 = { style: tmp.thumbnailImagePortrait, source: null };
    tmp11 = closure_1(tmp8[16]);
    if (tmp3 === tmp7(tmp8[10]).ForumLayout.GRID) {
      tmp10Result = tmp10(tmp8[17]);
    } else {
      tmp10Result = tmp10(tmp8[18]);
    }
    obj5.source = tmp10Result;
    items2[3] = tmp9(tmp11, obj5);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, description: null, thumbnailImagePortrait: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.description = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
createStyles.thumbnailImagePortrait = { alignSelf: "center" };
const React7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

export default function ConnectedChannelSettingsChangeDefaultForumLayout(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp2 = closure_7(ChannelSettingsChangeDefaultForumLayout, obj);
  }
  return tmp2;
};
export { ChannelSettingsChangeDefaultForumLayout };