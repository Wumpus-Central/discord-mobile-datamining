// === Module 17066: ChannelSettingsChangeDefaultForumLayout ===

// Module 17066 (ChannelSettingsChangeDefaultForumLayout)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5673 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8760 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

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
      ChannelSettingsActionCreatorsDefault.updateChannel({ defaultForumLayout });
      const obj2 = { defaultForumLayout };
      ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, { defaultForumLayout });
    }, items);
    tmp6 = View;
    obj1 = { title: null, defaultValue: null, onChange: null, hasIcons: true, children: null };
    intl = channel(closure_2[9]).intl;
    obj1.title = intl.string(channel(closure_2[9]).t.mFMDSq);
    LIST = tmp3;
    if (tmp3 == null) {
      LIST = tmp7(tmp8[10]).ForumLayout.LIST;
    }
    obj1.defaultValue = LIST;
    obj1.onChange = callback;
    tmp9 = jsx;
    obj8 = { icon: jsx(tmp7(tmp8[12]).GridSquareIcon, {}), label: null, value: null };
    intl2 = tmp7(tmp8[9]).intl;
    obj8.label = intl2.string(tmp7(tmp8[9]).t["U+rQfW"]);
    obj8.value = tmp7(tmp8[10]).ForumLayout.GRID;
    items1 = [, ];
    items1[0] = jsx(tmp7(tmp8[11]).TableRadioRow, obj8);
    obj9 = { icon: jsx(tmp7(tmp8[13]).ListViewIcon, {}), label: null, value: null };
    intl3 = tmp7(tmp8[9]).intl;
    obj9.label = intl3.string(tmp7(tmp8[9]).t.tuHPRX);
    obj9.value = tmp7(tmp8[10]).ForumLayout.LIST;
    items1[1] = jsx(tmp7(tmp8[11]).TableRadioRow, obj9);
    obj1.children = items1;
    items2 = [, , , ];
    items2[0] = tmp5(channel(closure_2[8]).TableRadioGroup, obj1);
    obj10 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: null };
    intl4 = tmp7(tmp8[9]).intl;
    obj10.children = intl4.string(tmp7(tmp8[9]).t.MbX5Hu);
    items2[1] = jsx(tmp7(tmp8[14]).Text, obj10);
    obj11 = { title: null };
    intl5 = tmp7(tmp8[9]).intl;
    obj11.title = intl5.string(tmp7(tmp8[9]).t.e4oMl4);
    items2[2] = jsx(tmp7(tmp8[15]).TableRowGroupTitle, obj11);
    tmp10 = closure_1;
    obj12 = { style: tmp.thumbnailImagePortrait, source: null };
    tmp11 = closure_1(tmp8[16]);
    if (tmp3 === tmp7(tmp8[10]).ForumLayout.GRID) {
      tmp10Result = tmp10(tmp8[17]);
    } else {
      tmp10Result = tmp10(tmp8[18]);
    }
    obj12.source = tmp10Result;
    items2[3] = tmp9(tmp11, obj12);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, description: null, thumbnailImagePortrait: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj2.description = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
obj2.thumbnailImagePortrait = { alignSelf: "center" };
const React7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

export default function ConnectedChannelSettingsChangeDefaultForumLayout(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = closure_7(ChannelSettingsChangeDefaultForumLayout, obj2);
  }
  return tmp2;
};
export { ChannelSettingsChangeDefaultForumLayout };