import React from 'react';
import ReactDOM from 'react-dom';
import './Order.css'

// Component that will return an
// unordered list
function Order(props)
{
	return(
		<React.Fragment>
			<table>
			  <tbody>	
					<tr>
						<th>Name</th>
					</tr>
					<tr>
						<td>
							<ol>
								<li>Indronil</li>
								<li>Shawbori</li>
								<li>Shawnda</li>
							</ol>
						</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	)
	
}

export default Order
