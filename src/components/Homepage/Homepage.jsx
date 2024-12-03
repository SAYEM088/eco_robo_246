import DataUploader from "../DataUploader/DataUploader";
import Graph from "../Graph/Graph";

export default function Homepage() {
  return (
    <div className=" h-screen">
       <div className="flex">
       <div className="w-2/6 h-screen">
      <DataUploader />
      </div>
      <div className="w-4/6 h-screen">
      <Graph />
    </div>
       </div>
    </div>
  );
}
