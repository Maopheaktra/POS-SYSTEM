// Add a category
function addCategory() {
    const categoryName = document.querySelector(".maincategory input[type='text']").value;
    
    // Perform validation and add the category to the table
    if (categoryName) {
      const tableBody = document.querySelector("table tbody");
      const newRow = document.createElement("tr");
      const categoryID = generateCategoryID();
      
      newRow.textContent = `
        <td>${categoryID}</td>
        <td>${categoryName}</td>
        <td>
          <button onclick="removeCategory(this)">Remove</button>
        </td>
      `;

      tableBody.appendChild(newRow);
      
      // Clear input fields
      document.querySelector(".maincategory input[type='text']").value = "";
      
      // Close the dialog
      const dialog = document.querySelector(".maincategory dialog");
      dialog.close();
    }
  }
  
  // Remove a category
  function removeCategory(button) {
    const row = button.closest("tr");
    row.remove();
  }
  
  // Search categories
  function searchCategories() {
    const searchValue = document.querySelector(".search input[type='text']").value.toLowerCase();
    const tableRows = document.querySelectorAll("table tbody tr");
    
    tableRows.forEach((row) => {
      const categoryName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
      
      if (categoryName.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  
  // Generate a random category ID
  function generateCategoryID() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 6;
    let categoryID = "";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      categoryID += characters.charAt(randomIndex);
    }
    
    return categoryID;
  }