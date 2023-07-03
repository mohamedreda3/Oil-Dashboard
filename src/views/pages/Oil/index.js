import React, { useRef, useState } from 'react'
import Tables from 'src/views/base/tables/Tables'
import './style.css'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
} from '@coreui/react'
import { columns, items } from './oilDate'

function Oil() {
  const addShow = useRef()

  const handleShow = () => {
    if (addShow.current.style.height) {
      addShow.current.style.height = null
      // addShow.current.style.padding = null
    } else {
      addShow.current.style.height = addShow.current.scrollHeight + 'px'
      // addShow.current.style.padding = '18px 25px'
    }
  }
  const [showAdd, setShowAdd] = useState(false)
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          {!showAdd ? (
            <div className="btn_add">
              <CCol xs={12}>
                <CButton
                  color="primary"
                  onClick={() => {
                    setShowAdd(true)
                    handleShow()
                  }}
                >
                  Add Oil
                </CButton>
              </CCol>
            </div>
          ) : null}
          <CCol md={20}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <div ref={addShow} className="addOil">
                    <CForm
                      className="row g-3 needs-validation"
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <CCol xs={12}>
                        <CButton
                          color="danger"
                          type="reset"
                          onClick={() => {
                            setShowAdd(false)
                            handleShow()
                          }}
                        >
                          Close
                        </CButton>
                      </CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="oilTitle">Oil Title</CFormLabel>
                        <CFormInput type="text" id="oilTitle" placeholder="زيت طعام" required />
                      </div>
                      <div className="mb-3">
                        <CFormLabel htmlFor="oilPoints">Oil Points</CFormLabel>
                        <CFormInput type="text" id="oilPoints" placeholder="30" required />
                      </div>
                      <CCol xs={12}>
                        <CButton color="primary" type="submit">
                          Submit form
                        </CButton>
                      </CCol>
                    </CForm>
                  </div>

                  <CTable columns={columns} items={items} />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Oil
