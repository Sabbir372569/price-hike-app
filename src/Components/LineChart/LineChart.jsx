import PieChart from './PieChart';
import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';


const LineChart = () => {

    const mathMarksData =
    [
        {"id": 1, "name": "Emily Johnson", "math": 85, "physics": 78, "chemistry": 92},
        {"id": 2, "name": "Daniel Smith", "math": 78, "physics": 85, "chemistry": 88},
        {"id": 3, "name": "Sophia Brown", "math": 92, "physics": 90, "chemistry": 95},
        {"id": 4, "name": "Michael Davis", "math": 88, "physics": 75, "chemistry": 84},
        {"id": 5, "name": "Olivia Wilson", "math": 46, "physics": 82, "chemistry": 70},
        {"id": 6, "name": "William Miller", "math": 95, "physics": 96, "chemistry": 89},
        {"id": 7, "name": "Ava Anderson", "math": 30, "physics": 58, "chemistry": 87},
        {"id": 8, "name": "Liam Martinez", "math": 89, "physics": 92, "chemistry": 93},
        {"id": 9, "name": "Mia Thompson", "math": 93, "physics": 87, "chemistry": 94},
        {"id": 10, "name": "Ethan Lewis", "math": 82, "physics": 78, "chemistry": 85}
      ]
      
    return (
        <div className='flex justify-evenly  my-10'>
            <div className='items-left'>
                    <LChart width={800} height={300} data={mathMarksData}>
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis></YAxis>
                            <Line dataKey={"math"} stroke='purple'></Line> 
                            <Line dataKey={"physics"} stroke='yellow'></Line> 
                            <Line dataKey={"chemistry"} stroke='red'></Line> 
                    </LChart>
            </div>
            <div>
                  <PieChart></PieChart>  
            </div>
        </div>
           
    );
};

export default LineChart;
