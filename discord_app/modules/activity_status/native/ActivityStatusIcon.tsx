// === Module 10882: ActivityStatusIcon ===

// Module 10882 (ActivityStatusIcon)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_1 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default function ActivityStatusIcon(arg0) {
  ({ icon, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, style: 0 }));
  const obj = { size: "xxs", style: null, color: "status-positive" };
  const items = [closure_1().icon, style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  return <icon size="xxs" style={null} color="status-positive" />;
};