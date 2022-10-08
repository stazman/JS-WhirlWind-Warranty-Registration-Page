function createWarrantyPage(){

	let body = document.body

	let header = document.createElement("header")
	header.textContent = "WhirlWind Warranty"

	let form = document.createElement("form")
	form.id = "warranty"

	let firstNameLabel = document.createElement("label")
	firstNameLabel.textContent = "First Name"
	form.append(firstNameLabel)

	let firstName = document.createElement("input")
	firstName.type = "textarea"
	form.append(firstName)

	body.append(header)
	body.append(form)
}