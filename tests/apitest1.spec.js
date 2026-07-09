// @ts-check
import { test, expect } from '@playwright/test';

test('get the weather details', async ({ request }) => {
   const response = await request.get('https://api.weather.gov/alerts', {params:{'limit':500}});
   const body = await response.json();
   console.log(body);  
});

test('get the booking details', async({request})=>{
const response = await request.get('https://restful-booker.herokuapp.com/booking/47');
const body = await response.json();
console.log(body);
});

test.only('post the booking details', async({request})=>{
const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: { 'Content-Type': 'application/json' },
    data: {
        "firstname": "jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"    
        },
        "additionalneeds": "Breakfast"
    }
    });
    const body = await response.json()
    console.log(body.bookingid);
    console.log(body.booking.firstname);
    console.log(body.booking.bookingdates.checkin);

    expect(body.booking.firstname).toBe('jim');
    console.log('Successfully validated the firstname');
    console.log('Successfully pushed code to github');
});