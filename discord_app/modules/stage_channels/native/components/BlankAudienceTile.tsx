// === Module 10197: BlankAudienceTile ===

// Module 10197 (BlankAudienceTile)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import AudienceTile from "AudienceTile" /* 10198 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default noop.memo(() => {
  const audienceTileStyles = AudienceTile.useAudienceTileStyles();
  const obj3 = { style: null };
  const items = [audienceTileStyles.container, ];
  items[1] = { width: AudienceTile.getTileWidthStyle(useWindowDimensionsDefault().width) };
  obj3.style = items;
  return <View style={null} />;
});