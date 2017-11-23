function initData() {
  jimData.variables["batch_users"] = "";
  jimData.variables["radio_button_group"] = "";
  jimData.variables["data_table_edit_in_place"] = "";
  jimData.variables["data_table_filtering"] = "";
  jimData.variables["filter by"] = "";
  jimData.variables["select_and_display"] = "";
  jimData.variables["decisions_data_driven"] = "";
  jimData.variables["grid product"] = "";
  jimData.variables["record_action_update"] = "";
  jimData.variables["store and retrieve data"] = "";
  jimData.variables["user_ratings_dynamic"] = "";
  jimData.variables["user_ratings"] = "";
  jimData.variables["invoice_line"] = "";
  jimData.variables["record_action_delete"] = "";
  jimData.variables["radio_buttons_in_data_rows"] = "";
  jimData.variables["Cars"] = "";
  jimData.variables["expressions_list"] = "";
  jimData.variables["Pattern"] = "1";
  jimData.variables["use_icon_to_indicate_user_status"] = "";
  jimData.variables["test"] = "";
  jimData.variables["users"] = "";
  jimData.variables["complex_search"] = "";
  jimData.variables["search_single_criteria"] = "";
  jimData.variables["reset_datasheets"] = "";
  jimData.variables["record_action_save"] = "";
  jimData.variables["grid"] = "";
  jimData.variables["moving_from_one_list_to_another"] = "";
  jimData.variables["Pattern Group"] = "1";
  jimData.variables["current date"] = "";
  jimData.variables["twitter message"] = "";
  jimData.variables["items"] = "";
  jimData.datamasters["grid"] = [
    {
      "id": 1,
      "datamaster": "grid",
      "userdata": {
        "name": "Item 1",
        "image": "./images/180c69a2-e849-4647-b65d-640fdde3bb55.jpg",
        "price": "249.99"
      }
    },
    {
      "id": 2,
      "datamaster": "grid",
      "userdata": {
        "name": "Item 2",
        "image": "./images/0ea11063-f710-4d70-b0ed-22c7a175f718.jpg",
        "price": "69.99"
      }
    },
    {
      "id": 3,
      "datamaster": "grid",
      "userdata": {
        "name": "Item 3",
        "image": "./images/eff35e00-64eb-420b-aa65-604d0580394f.jpg",
        "price": "99.99"
      }
    },
    {
      "id": 4,
      "datamaster": "grid",
      "userdata": {
        "name": "Item 4",
        "image": "./images/3552a3cc-4320-4e3c-874c-a81eac7bd173.jpg",
        "price": "149.99"
      }
    },
    {
      "id": 5,
      "datamaster": "grid",
      "userdata": {
        "name": "Item 5",
        "image": "./images/ba493fad-a035-4629-8ee1-0da060317be9.jpg",
        "price": "149.99"
      }
    },
    {
      "id": 6,
      "datamaster": "grid",
      "userdata": {
        "name": "Item 6",
        "image": "./images/60d4fd50-159d-4d19-b676-128180301fd6.jpg",
        "price": "69.99"
      }
    },
    {
      "id": 7,
      "datamaster": "grid",
      "userdata": {
        "name": "Item 7",
        "image": "./images/df116683-9f78-4b02-bc20-379e8e84f46d.jpg",
        "price": "249.99"
      }
    }
  ];

  jimData.datamasters["record_action_delete"] = [
    {
      "id": 1,
      "datamaster": "record_action_delete",
      "userdata": {
        "first name": "Alexis",
        "last name": "Smith"
      }
    },
    {
      "id": 2,
      "datamaster": "record_action_delete",
      "userdata": {
        "first name": "Pauline",
        "last name": "Hale"
      }
    },
    {
      "id": 3,
      "datamaster": "record_action_delete",
      "userdata": {
        "first name": "Niraj",
        "last name": "Gupta"
      }
    },
    {
      "id": 4,
      "datamaster": "record_action_delete",
      "userdata": {
        "first name": "Douglas",
        "last name": "Harvey"
      }
    },
    {
      "id": 5,
      "datamaster": "record_action_delete",
      "userdata": {
        "first name": "Julio",
        "last name": "Sanchez"
      }
    },
    {
      "id": 6,
      "datamaster": "record_action_delete",
      "userdata": {
        "first name": "Pablo",
        "last name": "Díaz"
      }
    }
  ];

  jimData.datamasters["record_action_update"] = [
    {
      "id": 1,
      "datamaster": "record_action_update",
      "userdata": {
        "first name": "Alexis",
        "last name": "Smith"
      }
    },
    {
      "id": 2,
      "datamaster": "record_action_update",
      "userdata": {
        "first name": "Pauline",
        "last name": "Hale"
      }
    },
    {
      "id": 3,
      "datamaster": "record_action_update",
      "userdata": {
        "first name": "Niraj",
        "last name": "Gupta"
      }
    },
    {
      "id": 4,
      "datamaster": "record_action_update",
      "userdata": {
        "first name": "Douglas",
        "last name": "Jones"
      }
    },
    {
      "id": 5,
      "datamaster": "record_action_update",
      "userdata": {
        "first name": "Juan",
        "last name": "Sanchez"
      }
    },
    {
      "id": 6,
      "datamaster": "record_action_update",
      "userdata": {
        "first name": "Pablo",
        "last name": "Díaz"
      }
    }
  ];

  jimData.datamasters["use_icon_to_indicate_user_status"] = [
    {
      "id": 1,
      "datamaster": "use_icon_to_indicate_user_status",
      "userdata": {
        "user name": "John Doe",
        "status": "active"
      }
    },
    {
      "id": 2,
      "datamaster": "use_icon_to_indicate_user_status",
      "userdata": {
        "user name": "Jane Doe",
        "status": "inactive"
      }
    },
    {
      "id": 3,
      "datamaster": "use_icon_to_indicate_user_status",
      "userdata": {
        "user name": "John Who",
        "status": "inactive"
      }
    },
    {
      "id": 4,
      "datamaster": "use_icon_to_indicate_user_status",
      "userdata": {
        "user name": "Jane Who",
        "status": "active"
      }
    }
  ];

  jimData.datamasters["expressions_list"] = [
    {
      "id": 1,
      "datamaster": "expressions_list",
      "userdata": {
        "first name": "Jane",
        "last name": "Doe",
        "age": "15"
      }
    },
    {
      "id": 2,
      "datamaster": "expressions_list",
      "userdata": {
        "first name": "John",
        "last name": "Doe",
        "age": "45"
      }
    },
    {
      "id": 3,
      "datamaster": "expressions_list",
      "userdata": {
        "first name": "Jim",
        "last name": "Smith",
        "age": "30"
      }
    }
  ];

  jimData.datamasters["batch_users"] = [
    {
      "id": 1,
      "datamaster": "batch_users",
      "userdata": {
        "first name": "John",
        "last name": "Doe",
        "status": "inactive"
      }
    },
    {
      "id": 2,
      "datamaster": "batch_users",
      "userdata": {
        "first name": "Jane",
        "last name": "Doe",
        "status": "inactive"
      }
    },
    {
      "id": 3,
      "datamaster": "batch_users",
      "userdata": {
        "first name": "Betty",
        "last name": "Smith",
        "status": "active"
      }
    },
    {
      "id": 4,
      "datamaster": "batch_users",
      "userdata": {
        "first name": "Matthew",
        "last name": "Lee",
        "status": "inactive"
      }
    },
    {
      "id": 5,
      "datamaster": "batch_users",
      "userdata": {
        "first name": "Joe",
        "last name": "Manning",
        "status": "active"
      }
    }
  ];
  jimData.datamasters["batch_users"].category = {
    "status": ["active","inactive"]
  };

  jimData.datamasters["sort_datagrid"] = [
    {
      "id": 1,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Isabella",
        "Age": "27",
        "Birthday": "09/12/1985"
      }
    },
    {
      "id": 2,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Emma",
        "Age": "22",
        "Birthday": "03/08/1990"
      }
    },
    {
      "id": 3,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Olivia",
        "Age": "18",
        "Birthday": "12/06/1994"
      }
    },
    {
      "id": 4,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Sophia",
        "Age": "36",
        "Birthday": "01/29/1974"
      }
    },
    {
      "id": 5,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Ava",
        "Age": "5",
        "Birthday": "04/31/2007"
      }
    },
    {
      "id": 6,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Emily",
        "Age": "55",
        "Birthday": "07/25/1957"
      }
    },
    {
      "id": 7,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Madison",
        "Age": "43",
        "Birthday": "02/18/1969"
      }
    },
    {
      "id": 8,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Abigail",
        "Age": "13",
        "Birthday": "05/31/1999"
      }
    },
    {
      "id": 9,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Chloe",
        "Age": "86",
        "Birthday": "11/15/1926"
      }
    },
    {
      "id": 10,
      "datamaster": "sort_datagrid",
      "userdata": {
        "Name": "Mia",
        "Age": "8",
        "Birthday": "09/05/2003"
      }
    }
  ];

  jimData.datamasters["user_ratings"] = [
    {
      "id": 1,
      "datamaster": "user_ratings",
      "userdata": {
        "item": "Item 1",
        "rating": "1 star"
      }
    },
    {
      "id": 2,
      "datamaster": "user_ratings",
      "userdata": {
        "item": "Item 2",
        "rating": "2 stars"
      }
    },
    {
      "id": 3,
      "datamaster": "user_ratings",
      "userdata": {
        "item": "Item 3",
        "rating": "3 stars"
      }
    },
    {
      "id": 4,
      "datamaster": "user_ratings",
      "userdata": {
        "item": "Item 4",
        "rating": "4 stars"
      }
    },
    {
      "id": 5,
      "datamaster": "user_ratings",
      "userdata": {
        "item": "Item 5",
        "rating": "5 stars"
      }
    }
  ];

  jimData.datamasters["twitter message"] = [
    {
      "id": 1,
      "datamaster": "twitter message",
      "userdata": {
        "photo": "./images/145b630b-5228-412b-add4-63761e6e6e06.jpg",
        "username": "user_one",
        "name": "user",
        "surname": "one",
        "text": "Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac",
        "time": "1 minute ago"
      }
    },
    {
      "id": 2,
      "datamaster": "twitter message",
      "userdata": {
        "photo": "./images/bbd40f50-b73b-4364-ace7-5cd3140cc236.jpg",
        "username": "user_two",
        "name": "user",
        "surname": "two",
        "text": "Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac",
        "time": "4 minutes ago"
      }
    },
    {
      "id": 3,
      "datamaster": "twitter message",
      "userdata": {
        "photo": "./images/526cccac-0477-4582-ae0b-10118acff561.png",
        "username": "user_three",
        "name": "userq",
        "surname": "three",
        "text": "Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac",
        "time": "5 minutes ago"
      }
    }
  ];

  jimData.datamasters["radio_buttons_in_data_rows"] = [
    {
      "id": 1,
      "datamaster": "radio_buttons_in_data_rows",
      "userdata": {
        "first name": "John",
        "last name": "Doe"
      }
    },
    {
      "id": 2,
      "datamaster": "radio_buttons_in_data_rows",
      "userdata": {
        "first name": "Jane",
        "last name": "Doe"
      }
    },
    {
      "id": 3,
      "datamaster": "radio_buttons_in_data_rows",
      "userdata": {
        "first name": "Betty",
        "last name": "Smith"
      }
    },
    {
      "id": 4,
      "datamaster": "radio_buttons_in_data_rows",
      "userdata": {
        "first name": "Matthew",
        "last name": "Lee"
      }
    },
    {
      "id": 5,
      "datamaster": "radio_buttons_in_data_rows",
      "userdata": {
        "first name": "Joe",
        "last name": "Manning"
      }
    }
  ];

  jimData.datamasters["record_action_save"] = [
    {
      "id": 1,
      "datamaster": "record_action_save",
      "userdata": {
        "first name": "Alexis",
        "last name": "Smith"
      }
    },
    {
      "id": 2,
      "datamaster": "record_action_save",
      "userdata": {
        "first name": "Pauline",
        "last name": "Hale"
      }
    },
    {
      "id": 3,
      "datamaster": "record_action_save",
      "userdata": {
        "first name": "Niraj",
        "last name": "Gupta"
      }
    },
    {
      "id": 4,
      "datamaster": "record_action_save",
      "userdata": {
        "first name": "Douglas",
        "last name": "Harvey"
      }
    },
    {
      "id": 5,
      "datamaster": "record_action_save",
      "userdata": {
        "first name": "Julio",
        "last name": "Sanchez"
      }
    },
    {
      "id": 6,
      "datamaster": "record_action_save",
      "userdata": {
        "first name": "Pablo",
        "last name": "Díaz"
      }
    },
    {
      "id": 7,
      "datamaster": "record_action_save",
      "userdata": {
        "first name": "John",
        "last name": "Doe"
      }
    }
  ];

  jimData.datamasters["search_single_criteria"] = [
    {
      "id": 1,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Alexis",
        "last name": "Smith"
      }
    },
    {
      "id": 2,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Pauline",
        "last name": "Hale"
      }
    },
    {
      "id": 3,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Niraj",
        "last name": "Gupta"
      }
    },
    {
      "id": 4,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Douglas",
        "last name": "Harvey"
      }
    },
    {
      "id": 5,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Julio",
        "last name": "Sanchez"
      }
    },
    {
      "id": 6,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Pablo",
        "last name": "Díaz"
      }
    },
    {
      "id": 7,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Vasuda",
        "last name": "Kapoor"
      }
    },
    {
      "id": 8,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Xiang",
        "last name": "Lee"
      }
    },
    {
      "id": 9,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Heather",
        "last name": "Hansen"
      }
    },
    {
      "id": 10,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Betty",
        "last name": "Medina"
      }
    },
    {
      "id": 11,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Nana",
        "last name": "Kudo"
      }
    },
    {
      "id": 12,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Katashi",
        "last name": "Pham"
      }
    },
    {
      "id": 13,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Kadem",
        "last name": "Mahmoud"
      }
    },
    {
      "id": 14,
      "datamaster": "search_single_criteria",
      "userdata": {
        "first name": "Carine",
        "last name": "Basset"
      }
    }
  ];

  jimData.datamasters["Sample_grid"] = [
    {
      "id": 1,
      "datamaster": "Sample_grid",
      "userdata": {
        "Column 1": "Node 1",
        "Column 2": "sample text",
        "Column 3": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Sample_grid",
      "userdata": {
        "Column 1": "Node 1",
        "Column 2": "sample text",
        "Column 3": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Sample_grid",
      "userdata": {
        "Column 1": "Node 2",
        "Column 2": "sample text",
        "Column 3": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "Sample_grid",
      "userdata": {
        "Column 1": "Node 2",
        "Column 2": "sample text",
        "Column 3": "sample text"
      }
    },
    {
      "id": 5,
      "datamaster": "Sample_grid",
      "userdata": {
        "Column 1": "Node 2",
        "Column 2": "sample text",
        "Column 3": "sample text"
      }
    },
    {
      "id": 6,
      "datamaster": "Sample_grid",
      "userdata": {
        "Column 1": "Node 3",
        "Column 2": "sample text",
        "Column 3": "sample text"
      }
    }
  ];

  jimData.datamasters["complex_search"] = [
    {
      "id": 1,
      "datamaster": "complex_search",
      "userdata": {
        "customer": "Matthew Williams",
        "status": "Failed",
        "reason": "Cancellation"
      }
    },
    {
      "id": 2,
      "datamaster": "complex_search",
      "userdata": {
        "customer": "Steeve Moor",
        "status": "Failed",
        "reason": "Replacement"
      }
    },
    {
      "id": 3,
      "datamaster": "complex_search",
      "userdata": {
        "customer": "Jane Doe",
        "status": "Passed",
        "reason": "Correction"
      }
    },
    {
      "id": 4,
      "datamaster": "complex_search",
      "userdata": {
        "customer": "Maurice Lee",
        "status": "Passed",
        "reason": "Correction"
      }
    },
    {
      "id": 5,
      "datamaster": "complex_search",
      "userdata": {
        "customer": "Joe Smith",
        "status": "Rejected",
        "reason": "Original"
      }
    },
    {
      "id": 6,
      "datamaster": "complex_search",
      "userdata": {
        "customer": "Janice Stone",
        "status": "Rejected",
        "reason": "Replacement"
      }
    },
    {
      "id": 7,
      "datamaster": "complex_search",
      "userdata": {
        "customer": "Barbara Watters",
        "status": "Rejected",
        "reason": "Cancellation"
      }
    }
  ];
  jimData.datamasters["complex_search"].category = {
    "reason": ["","Original","Cancellation","Correction","Replacement"],
    "status": ["Passed","Failed","Rejected"]
  };

  jimData.datamasters["items"] = [
    {
      "id": 1,
      "datamaster": "items",
      "userdata": {
        "Name": "Item 1",
        "Price": "50.00"
      }
    },
    {
      "id": 2,
      "datamaster": "items",
      "userdata": {
        "Name": "Item 2",
        "Price": "49.99"
      }
    },
    {
      "id": 3,
      "datamaster": "items",
      "userdata": {
        "Name": "Item 3",
        "Price": "100.00"
      }
    }
  ];

  jimData.datamasters["data_table_edit_in_place"] = [
    {
      "id": 1,
      "datamaster": "data_table_edit_in_place",
      "userdata": {
        "name": "Matthew Smith"
      }
    },
    {
      "id": 2,
      "datamaster": "data_table_edit_in_place",
      "userdata": {
        "name": "John Doe"
      }
    },
    {
      "id": 3,
      "datamaster": "data_table_edit_in_place",
      "userdata": {
        "name": "Mark Jones"
      }
    },
    {
      "id": 4,
      "datamaster": "data_table_edit_in_place",
      "userdata": {
        "name": "Betty White"
      }
    },
    {
      "id": 5,
      "datamaster": "data_table_edit_in_place",
      "userdata": {
        "name": "Ann Doe"
      }
    }
  ];

  jimData.datamasters["Cars"] = [
    {
      "id": 1,
      "datamaster": "Cars",
      "userdata": {
        "Model": "c9b567e7",
        "Year": "1964",
        "Manufacturer": "Volkswagen",
        "Color": "Yellow"
      }
    },
    {
      "id": 2,
      "datamaster": "Cars",
      "userdata": {
        "Model": "46fe5237",
        "Year": "1976",
        "Manufacturer": "Chrysler",
        "Color": "Silver"
      }
    },
    {
      "id": 3,
      "datamaster": "Cars",
      "userdata": {
        "Model": "66e59830",
        "Year": "1986",
        "Manufacturer": "Ford",
        "Color": "Maroon"
      }
    },
    {
      "id": 4,
      "datamaster": "Cars",
      "userdata": {
        "Model": "a335ff39",
        "Year": "1964",
        "Manufacturer": "Volkswagen",
        "Color": "White"
      }
    },
    {
      "id": 5,
      "datamaster": "Cars",
      "userdata": {
        "Model": "91d0eacc",
        "Year": "2006",
        "Manufacturer": "Mercedes",
        "Color": "Brown"
      }
    },
    {
      "id": 6,
      "datamaster": "Cars",
      "userdata": {
        "Model": "5905944d",
        "Year": "1960",
        "Manufacturer": "Renault",
        "Color": "Orange"
      }
    },
    {
      "id": 7,
      "datamaster": "Cars",
      "userdata": {
        "Model": "691fd58d",
        "Year": "1982",
        "Manufacturer": "Ferrari",
        "Color": "Yellow"
      }
    },
    {
      "id": 8,
      "datamaster": "Cars",
      "userdata": {
        "Model": "0c2ecc50",
        "Year": "1993",
        "Manufacturer": "Volkswagen",
        "Color": "Brown"
      }
    },
    {
      "id": 9,
      "datamaster": "Cars",
      "userdata": {
        "Model": "7015d800",
        "Year": "1997",
        "Manufacturer": "Ford",
        "Color": "Black"
      }
    }
  ];
  jimData.datamasters["Cars"].category = {
    "Manufacturer": ["Select","Volkswagen","Chrysler","Ford","Mercedes","Renault","Ferrari"]
  };

  jimData.datamasters["invoice_line"] = [
  ];

  jimData.datamasters["test"] = [
    {
      "id": 1,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 5,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 6,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 7,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 8,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 9,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    },
    {
      "id": 10,
      "datamaster": "test",
      "userdata": {
        "a": "sample text",
        "b": "-",
        "c": "sample text",
        "d": "sample text"
      }
    }
  ];

  jimData.datamasters["user_ratings_dynamic"] = [
    {
      "id": 1,
      "datamaster": "user_ratings_dynamic",
      "userdata": {
        "item": "Item 1",
        "rating": "1 star"
      }
    },
    {
      "id": 2,
      "datamaster": "user_ratings_dynamic",
      "userdata": {
        "item": "Item 2",
        "rating": "2 stars"
      }
    },
    {
      "id": 3,
      "datamaster": "user_ratings_dynamic",
      "userdata": {
        "item": "Item 3",
        "rating": "3 stars"
      }
    },
    {
      "id": 4,
      "datamaster": "user_ratings_dynamic",
      "userdata": {
        "item": "Item 4",
        "rating": "4 stars"
      }
    },
    {
      "id": 5,
      "datamaster": "user_ratings_dynamic",
      "userdata": {
        "item": "Item 5",
        "rating": "5 stars"
      }
    }
  ];

  jimData.datamasters["2"] = [
    {
      "id": 1,
      "datamaster": "2",
      "userdata": {
        "JAHIR": "sample text",
        "FECHA": "09/12/2011",
        "ESTUDIANTE": "true"
      }
    },
    {
      "id": 2,
      "datamaster": "2",
      "userdata": {
        "JAHIR": "sample text",
        "FECHA": "09/12/2011",
        "ESTUDIANTE": "true"
      }
    },
    {
      "id": 3,
      "datamaster": "2",
      "userdata": {
        "JAHIR": "sample text",
        "FECHA": "09/12/2011",
        "ESTUDIANTE": "true"
      }
    },
    {
      "id": 4,
      "datamaster": "2",
      "userdata": {
        "JAHIR": "sample text",
        "FECHA": "09/12/2011",
        "ESTUDIANTE": "true"
      }
    },
    {
      "id": 5,
      "datamaster": "2",
      "userdata": {
        "JAHIR": "sample text",
        "FECHA": "09/12/2011",
        "ESTUDIANTE": "true"
      }
    },
    {
      "id": 6,
      "datamaster": "2",
      "userdata": {
        "JAHIR": "sample text",
        "FECHA": "09/12/2011",
        "ESTUDIANTE": "true"
      }
    }
  ];

  jimData.datamasters["moving_from_one_list_to_another"] = [
    {
      "id": 1,
      "datamaster": "moving_from_one_list_to_another",
      "userdata": {
        "work plans": "Flex Time"
      }
    },
    {
      "id": 2,
      "datamaster": "moving_from_one_list_to_another",
      "userdata": {
        "work plans": "Flex Week"
      }
    },
    {
      "id": 3,
      "datamaster": "moving_from_one_list_to_another",
      "userdata": {
        "work plans": "Reduced Work Time"
      }
    },
    {
      "id": 4,
      "datamaster": "moving_from_one_list_to_another",
      "userdata": {
        "work plans": "Flex Year"
      }
    },
    {
      "id": 5,
      "datamaster": "moving_from_one_list_to_another",
      "userdata": {
        "work plans": "Job Sharing"
      }
    },
    {
      "id": 6,
      "datamaster": "moving_from_one_list_to_another",
      "userdata": {
        "work plans": "Flex Place: Low Frequency"
      }
    },
    {
      "id": 7,
      "datamaster": "moving_from_one_list_to_another",
      "userdata": {
        "work plans": "Flex Place: High Frequency"
      }
    }
  ];

  jimData.isInitialized = true;
}