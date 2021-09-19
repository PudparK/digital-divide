import Airtable from 'airtable';
const base = new Airtable({apiKey: process.env.airtableKey}).base('appEjxpGdZbpP6fx4');

const data = base('data').select({
    // Selecting the first 3 records in Grid view:
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('GEO_ID'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

export default data;