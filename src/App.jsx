import "./App.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import DropdownComp from "./Modal";
function App() {
  return (
    <>
     <DropdownComp />
    </>
  );
}

export default App;

// function App() {
//   const x = useMotionValue(0);
//   const backgroundColor = useTransform(
//     x,
//     [-50, 0, 50],
//     ["#2b7fff", "#fb2c36", "#00c951"]
//   );
//   const borderRadius = useTransform(x, [-50, 0, 50], ["50%", "5%", "50%"]);
//   const scale = useTransform(x, [-50, 0, 50], [2, 1, 2]);
//   return (
//     <>
//       <div>
//         <motion.div
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           className=" w-32 h-32 bg-blue-400 flex justify-center items-center"
//           style={{
//             x,
//             backgroundColor,
//             borderRadius,
//             scale,
//           }}
//         >
//         </motion.div>
//       </div>
//     </>
//   );
// }

{
  /* <div className="w-[220px] h-[400px] border-2 border-white text-white rounded-lg overflow-y-hidden origin-top-left ">
        <motion.p
          className="text-[120px] leading-[0.8] flex "
          style={{ originX: 0, originY: 0 }}
          animate={{
            scaleX: [1, 1, 1.5, 1.5, 1],
            scaleY: [1, 1, 1, 1.5, 1.5],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            repeatDelay: 1,
          }}
        >
          ka
          <br />
          ra
          <br />
          nk
          <br />
        </motion.p>
      </div> */
}
