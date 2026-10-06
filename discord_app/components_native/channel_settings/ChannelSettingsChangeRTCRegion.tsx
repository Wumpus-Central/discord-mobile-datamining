// discord_app/components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../intl/index.native.tsx";
import native from "../../../discord_common/js/packages/design/native.tsx";
import TableRadioRow from "../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import Form2 from "../../design/void/Form/native/index.tsx";
import ChannelSettingsActionCreatorsDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import _toArray from "../../../_runtime/00729__toArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RegionStore from "../../stores/RegionStore.tsx";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channelId;

let obj2;
const jsx = Fragment.jsx;
const AUTOMATIC_RTC_REGION = "AUTOMATIC_RTC_REGION";
let obj = { form: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16 };
const metroImportAll = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class ChannelSettingsChangeRTCRegion extends PureComponent {
  constructor() {
    let intl;
    let items;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { regions: items, submitting: false, selectedRegionId: AUTOMATIC_RTC_REGION };
    const channel = applyArgumentsResult.props.channel;
    const regions = RegionStore.getRegions(channel.getGuildId());
    const obj2 = {
      id: AUTOMATIC_RTC_REGION,
      name: intl.string(intl2.t.JEmsap),
      sample_hostname: "",
      sample_port: 0,
      vip: false,
      deprecated: false,
      optimal: false,
      hidden: false,
    };
    intl = intl2.intl;
    items = [obj2];
    if (null != regions) {
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(
        items1,
        regions.filter((deprecated) => !deprecated.deprecated && !deprecated.hidden),
        0,
      );
      HermesBuiltin.apply(push, items1, items);
      const found = regions.find((id) => id.id === applyArgumentsResult.props.channel.rtcRegion);
      let id;
      if (found != null) {
        id = found.id;
      }
      if (id == null) {
        id = AUTOMATIC_RTC_REGION;
      }
      obj.selectedRegionId = id;
    }
    applyArgumentsResult.state = obj;
    return applyArgumentsResult;
  }
  handleSetRegion(arg0) {
    let rtcRegion;
    const self = this;
    let tmp = arg0;
    let c0 = arg0;
    let tmp2 = arg0;
    const state = this.state;
    if (arg0 == null) {
      tmp2 = AUTOMATIC_RTC_REGION;
    }
    state.selectedRegionId = tmp2;
    if (tmp === AUTOMATIC_RTC_REGION) {
      c0 = null;
      tmp = null;
    }
    let obj = self(10075);
    obj.updateChannel({ rtcRegion: tmp });
    self.setState({ submitting: true }, () => {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { rtcRegion };
      obj.saveChannel(self.props.channel.id, obj2);
    });
  }
  renderRegion(label) {
    return jsx(TableRadioRow.TableRadioRow, { label: label.name, value: label.id }, label.id);
  }
  renderRegions() {
    const self = this;
    const arr = _toArray(this.state.regions);
    const substr = arr.slice(0);
    const mapped = substr.map(this.renderRegion, this);
    return jsx(TableRadioGroup.TableRadioGroup, {
      defaultValue: this.state.selectedRegionId,
      onChange(arg0) {
        return self.handleSetRegion(arg0);
      },
      hasIcons: false,
      children: mapped,
    });
  }
  render() {
    const Form = Form2.Form;
    return <Form style={closure_8(this.context).form}>{this.renderRegions()}</Form>;
  }
}
const prototype = ChannelSettingsChangeRTCRegion.prototype;
ChannelSettingsChangeRTCRegion.contextType = native.ThemeContext;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      let tmp9;
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
      _modDef38(null != stateFromStores, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
      if (cResult[3] !== stateFromStores) {
        const tmp12 = <ChannelSettingsChangeRTCRegion channel={stateFromStores} />;
        cResult[3] = stateFromStores;
        cResult[4] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const items = [ChannelStore];
      const obj = channelId(504);
      const channel = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      _modDef38(null != channel, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
      return <ChannelSettingsChangeRTCRegion channel={channel} />;
    };
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx");

export default tmp3;
