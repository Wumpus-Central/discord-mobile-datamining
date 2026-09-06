// === Module 16854: ChannelSettingsChangeRTCRegion ===

// Module 16854 (ChannelSettingsChangeRTCRegion)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import Form from "Form" /* 8593 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8625 */;
import _toArray from "_toArray" /* 718 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RegionStore from "RegionStore" /* 16810 */;

require = fn;
const jsx = fn(21).jsx;
const AUTOMATIC_RTC_REGION = "AUTOMATIC_RTC_REGION";
fn(4560);
let createStyles = { form: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.form = createStyles;
let closure_8 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class ChannelSettingsChangeRTCRegion extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = { regions: [], submitting: false, selectedRegionId: AUTOMATIC_RTC_REGION };
    channel = applyArgumentsResult.props.channel;
    tmp3 = AUTOMATIC_RTC_REGION;
    regions = closure_5.getRegions(channel.getGuildId());
    obj = { id: AUTOMATIC_RTC_REGION, name: null, sample_hostname: "", sample_port: 0, vip: false, deprecated: false, optimal: false, hidden: false };
    intl = closure_0(closure_2[8]).intl;
    obj.name = intl.string(closure_0(closure_2[8]).t.JEmsap);
    items = [];
    items[0] = obj;
    if (null != regions) {
      push = items.push;
      items1 = [];
      num = 0;
      tmp4 = items1;
      arraySpreadResult = HermesBuiltin.arraySpread(regions.filter((deprecated) => {
        deprecated = deprecated.deprecated;
        let tmp = !deprecated;
        if (!deprecated) {
          tmp = !deprecated.hidden;
        }
        return tmp;
      }), 0);
      tmp6 = push;
      tmp7 = items1;
      tmp8 = items;
      applyResult = HermesBuiltin.apply(items1, items);
      found = regions.find((id) => id.id === applyArgumentsResult.props.channel.rtcRegion);
      id = undefined;
      if (found != null) {
        id = found.id;
      }
      if (id == null) {
        id = tmp3;
      }
      obj.selectedRegionId = id;
    }
    obj.regions = items;
    applyArgumentsResult.state = obj;
    return applyArgumentsResult;
  }
}
const prototype = ChannelSettingsChangeRTCRegion.prototype;
prototype["handleSetRegion"] = function handleSetRegion(arg0) {
  const self = this;
  let tmp = arg0;
  c0 = arg0;
  let tmp2 = arg0;
  if (arg0 == null) {
    tmp2 = AUTOMATIC_RTC_REGION;
  }
  this.state.selectedRegionId = tmp2;
  if (tmp === AUTOMATIC_RTC_REGION) {
    c0 = null;
    tmp = null;
  }
  self(8625).updateChannel({ rtcRegion: tmp });
  self.setState({ submitting: true }, () => {
    const obj = { rtcRegion };
    obj.saveChannel(self.props.channel.id, obj);
  });
};
prototype["renderRegion"] = function renderRegion(label) {
  return jsx(TableRadioRow.TableRadioRow, { label: label.name, value: label.id }, label.id);
};
prototype["renderRegions"] = function renderRegions() {
  const self = this;
  const substr = _toArray(this.state.regions).slice(0);
  const mapped = substr.map(this.renderRegion, this);
  return jsx(TableRadioGroup.TableRadioGroup, {
    defaultValue: this.state.selectedRegionId,
    onChange(arg0) {
      return self.handleSetRegion(arg0);
    },
    hasIcons: false,
    children: mapped
  });
};
prototype["render"] = function render() {
  const tmp = closure_8(this.context);
  return jsx(Form.Form, { style: closure_8(this.context).form, children: this.renderRegions() });
};
ChannelSettingsChangeRTCRegion.contextType = fn(4271).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx");

export default function ConnectedChannelSettingsChangeRTCRegion(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const channel = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  _modDef38(null != channel, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
  return <ChannelSettingsChangeRTCRegion channel={channel} />;
};