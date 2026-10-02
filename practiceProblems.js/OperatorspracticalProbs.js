// // practical, app-style problems

// //
//  /* 1. Cart quantity display (?? vs ||)
// // A user's cart has quantity: 0 for an item they removed but haven't deleted from the list yet. Your UI needs to show the quantity, or "Out of stock" if the value was never set (undefined). Write the line that decides what to display — and explain why using || here would silently break the "0 quantity" case. */
// let quantity = 0;
// console.log( quantity || 'out of stock now');  

// //
// /* 4. Stock counter buttons (pre vs post increment)
// An admin dashboard has +/− buttons next to each product's stock count. Clicking + should show the user the new stock count immediately in a confirmation toast, while a separate audit log should record the previous count before the change. Using one stock variable, write two lines — one for the toast message, one for the audit log entry — using ++stock and stock++ correctly for each purpose. */
 
// let stock1 = 5; // starting value, for example
// const previousStock = stock1++; // audit log: captures the OLD value (5), then stock becomes 6 — one increment only
// const newStock = stock1;        // toast: stock is already 6 here — no second ++ needed, just read it
// console.log("Toast: stock updated to", newStock);
// console.log("Audit log: previous stock was", previousStock);


// //
// /* 7. Username fallback chain
// A user profile object may have displayName, then username, then nothing at all. Some of these fields might correctly be set to "" (empty string, e.g., a user who cleared their display name on purpose) rather than being missing. Write one expression using ?? that picks the first field that's actually present (not null/undefined), even if that field happens to be an empty string — then explain why || would give a different, wrong result here. */

// console.log("" ?? "nouser" ); // it returns back empty string value 
// console.log( "" || "no_user"); // this answer is wrong becuase user is there.

// // the answer for or or operator is incoorect because it checks if the first value is a falsyfy or empty in that case it moves to second value and prints it regardless becuase it is or, if can choose anyone expect for falsify or empty in contract to that ?? does not consides only null and undefined.  


