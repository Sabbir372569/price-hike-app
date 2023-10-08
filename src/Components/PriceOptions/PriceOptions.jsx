import PriceOption from '../PriceOption/PriceOption'

const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Standard Membership",
      "description": "Access to basic gym facilities.",
      "price": 29.99,
      "duration": "1 month",
      "features": [
        "Access to cardio and weightlifting areas",
        "Locker room access",
        "24/7 gym access",
        "No contract commitment",
        "Free towel service",
        "Access to group fitness classes"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "description": "Access to premium gym facilities and classes.",
      "price": 49.99,
      "duration": "1 month",
      "features": [
        "All Standard Membership features",
        "Unlimited fitness classes",
        "Personal training session (1/month)",
        "Sauna and spa access",
        "Complimentary smoothie bar",
        "Guest pass (2/month)"
      ]
    },
    {
      "id": 3,
      "name": "Family Membership",
      "description": "Access for a family of up to 4 members.",
      "price": 99.99,
      "duration": "1 month",
      "features": [
        "Access for up to 4 family members",
        "Standard Membership features for each member",
        "Discounted group classes",
        "Kids' play area access",
        "Family locker room"
      ]
    },
    {
      "id": 4,
      "name": "Student Membership",
      "description": "Discounted membership for students.",
      "price": 19.99,
      "duration": "1 month",
      "features": [
        "Access to cardio and weightlifting areas",
        "Locker room access",
        "Valid student ID required",
        "No contract commitment",
        "Access to study area",
        "Student-only fitness classes"
      ]
    },
    {
      "id": 5,
      "name": "Corporate Membership",
      "description": "Membership for employees of participating companies",
      "price": 39.99,
      "features": [
        "Access to cardio and weightlifting equipment",
        "Locker room access",
        "Discounted rates for groups of 10 or more employees",
        "Corporate wellness programs",
        "Personal trainer sessions (1 per month)"
      ]
    },
    {
      "id": 6,
      "name": "Annual Membership",
      "description": "One-year membership with a discounted rate.",
      "price": 399.00,
      "duration": "12 months",
      "features": [
        "Access to cardio and weightlifting areas",
        "Locker room access",
        "12 months of unlimited gym access",
        "No contract commitment",
        "Annual fitness assessment",
        "Discounted personal training"
      ]
    }
  ];



  return (
    <div>
      <h2 className="text-5xl font-semibold text-center my-12">Best Prices in the Town</h2>
      <div className='grid grid-cols-3 grid-rows-3 gap-14'> 
        {
          priceOptions.map(option => <PriceOption option={option} key={option.id} > </PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;