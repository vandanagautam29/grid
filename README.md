# grid


Hi Team, Please see the below code
<script cr-grid type="" id="tablelist" collection="sample_list">
	<features all="true">
		<dynamic-views false/>
        <default-view></default-view>
		<export true/>
		<default-sort true column="mycolumn"/>
		<pagination true size="50"/>
		<grouping true column="topic"/>
		<select-all true collection="my_selected_array" column="id" condition=""/>
	</features>
	<cell class="custom-class-for-this-cell" header-text="Employee" column-value-key="employee" column-text-key="employeeText"><<column-text-key>></cell>
	<cell class="custom-class-for-this-cell" header-text="" column-value-key="" column-text-key="">
<span ng-if="type == '1'">TICKET : <<column-text-key>></span>
<span ng-if="type == '2'">SUBJECT : <<column-value-key>></span></cell>
</script>
(edited)

React

Reply

11:59
We will use this code snippet in Front End and you should write the backend to fit this frontend requirements. So backend directive development should be done based on the above sample
12:00
The features should be modular and we should be able to Enable or Disable in the table


UnyKloud Projects
  12:21 PM
var sample_list = [{"id":"", "employee":"1", "employeeText":"Piyush", "subject":""}, {}] (edited) 


hidefield -   <span class="material-icons hideFieldsIcon" ng-click="hideFromIndex = !hideFromIndex">
        {{ hideFromIndex ? 'visibility_off' : 'visibility' }}
      </span>







	  