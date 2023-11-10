package com.katelyn.empoweringthenation

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.Spinner

class SixweekCourse : AppCompatActivity() {
    lateinit var btnHome : Button
    lateinit var btnPurchase: Button
    lateinit var btnContact : Button
    lateinit var btnSixWeek : Button
    lateinit var btnSixMonth : Button
    lateinit var btnChildminding : Button
    lateinit var btnCooking : Button
    lateinit var btnGardenMaintenance : Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sixweek_course)
        btnHome = findViewById(R.id.btnHome)
        btnPurchase = findViewById(R.id.btnPurchase)
        btnContact = findViewById(R.id.bthContact)
        btnSixWeek = findViewById(R.id.btnSixWeek)
        btnSixMonth = findViewById(R.id.btnSixMonth)
        btnChildminding = findViewById(R.id.btnChildminding)
        btnCooking = findViewById(R.id.btnCooking)
        btnGardenMaintenance= findViewById(R.id.btnGardenmaintenance)


        btnHome.setOnClickListener {
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }
        btnPurchase.setOnClickListener {
            val intent = Intent(this, Purchase::class.java)
            startActivity(intent)
        }
        btnContact.setOnClickListener {
            val intent = Intent(this, Contact::class.java)
            startActivity(intent)
        }
        btnSixWeek.setOnClickListener {
            val intent = Intent(this, SixweekCourse::class.java)
            startActivity(intent)
        }

        btnSixMonth.setOnClickListener {
            val intent = Intent(this, SixmonthCourse::class.java)
            startActivity(intent)
        }
        btnCooking.setOnClickListener {
            val intent = Intent(this, cooking::class.java)
            startActivity(intent)
        }
        btnChildminding.setOnClickListener {
            val intent = Intent(this, childminding::class.java)
            startActivity(intent)
        }
        btnGardenMaintenance.setOnClickListener {
            val intent = Intent(this, gardenmaintenance::class.java)
            startActivity(intent)
        }
    }
}