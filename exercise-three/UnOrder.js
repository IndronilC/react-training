import React from 'react';
import ReactDOM from 'react-dom';
import './UnOrder.css'

// Component that will return an
// unordered list
function UnOrder(props)
{
	return(
		<React.Fragment>
			<table>
			  <tbody>	
					<tr>
						<th>Country</th>
					</tr>
					<tr>
						<td>
							<ul>
                                <li>Bharat</li>
                                <li>China</li>
                                <li>Japan</li>
                            </ul>
						</td>
					</tr>
					
				</tbody>
			</table>
		</React.Fragment>
	)
	
}

export default UnOrder
