import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
// import { PieChart, Pie, Cell} from 'recharts';
import { useState, useEffect } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([]);


    useEffect(() => {
        /* # If we use fetch    
            fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => setPhones(data.data))
        */

        // # If we use Axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;   /*prottekta map theke multiline kora hole autometically 
                                    return kore na tai amra return use korbo*/
                })
                setPhones(phonesWithFakeData)
            })

        //.then(data => console.log(data.data.data))
        /*  # Axios autometically data ke json ea convert kore dey
            # axios tara nijosso ekta  data formet toiri kore jekhane data tar vitor data tar vitor data
                thake tai  data er vitor array/object take access korte (data.data.data) evabe likha
        */
        /*
            ### kono kisu bar chart ea show korar Technique.

                const slug = "apple_iphone_13_mini-11104"
                undefined

                slug.split('-')
                (2)['apple_iphone_13_mini', '11104']         Object

                slug.split('-')[1]         //split (apple_iphone_13_mini  -  11104)
                '11104'                    //array 1

                parseInt("apple_iphone_13_mini-11104")       //convert Integer
                11104
                
                parseInt(slug.split('-')[1])                //amra ("apple_iphone_13_mini-11104") etar poriborte 
                11104                                         sorasory (slug.split('-')[1]) eta use korbo//
        */
    }, [])




    return (
        <div>
            <h2 className="text-5xl font-medium">Total Phones: {phones.length}</h2>
            
            <BarChart width={1500} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Tooltip dataKey='price'></Tooltip>
                <Tooltip dataKey='name'></Tooltip>
            </BarChart>         
        </div>
    );
};

export default Phones;