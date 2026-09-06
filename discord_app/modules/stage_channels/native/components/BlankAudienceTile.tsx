// === Module 10068: BlankAudienceTile ===

// Module 10068 (BlankAudienceTile)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import AudienceTile from "AudienceTile" /* 10069 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default noop.memo(() => {
  let obj = AudienceTile;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: AudienceTile.getTileWidthStyle(useWindowDimensionsDefault().width) };
  items[1] = obj;
  obj.style = items;
  return <View width={AudienceTile.getTileWidthStyle(useWindowDimensionsDefault().width)} />;
});