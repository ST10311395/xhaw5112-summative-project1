package com.katelyn.empoweringthenation

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.Spinner

class Purchase : AppCompatActivity() {
    lateinit var btnHome: Button
    lateinit var btnPurchase: Button
    lateinit var btnContact: Button
    lateinit var btnSixWeek: Button
    lateinit var btnSixMonth: Button
    lateinit var purLink: Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_purchase)
        btnHome = findViewById(R.id.btnHome)
        btnPurchase = findViewById(R.id.btnPurchase)
        btnContact = findViewById(R.id.bthContact)
        btnSixWeek = findViewById(R.id.btnSixWeek)
        btnSixMonth = findViewById(R.id.btnSixMonth)
        purLink = findViewById(R.id.purLink)

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

        purLink.setOnClickListener {
            openWebPage("file:///C:/Users/lab_services_student/AppData/Local/Temp/Temp1_BitRebels%20(MAIN).zip/BitRebels/Purchase.html")
        }
    }

    private fun openWebPage(url: String) {
        val webpage: Uri = Uri.parse(url)
        val intent = Intent(Intent.ACTION_VIEW, webpage)

        // Verify that the intent will resolve to an activity
        if (intent.resolveActivity(packageManager) != null) {
            startActivity(intent)
        } else {
            // Handle error or provide feedback
        }
    }
}